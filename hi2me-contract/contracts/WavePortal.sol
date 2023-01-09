// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    // generate a random number
    uint256 private seed;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    // store an array of structs
    Wave[] waves;

    // store the address with the address with the last time the user wave at me
    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log("I am a smart contract...");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave(string memory _message) public {
        // make sure the current timestamp is at least 10-minutes bigger than the last timestamp we stored
        require(
            lastWavedAt[msg.sender] + 5 minutes < block.timestamp,
            "Wait 10 minutes"
        );
        // update the current timestamp we have for the user
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s waved w/ message %s", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        // generate a new seed for the next user that sends a wave
        seed = (block.difficulty + block.timestamp + seed) % 100;

        // give 50% chance that the user wins the price
        if (seed <= 50) {
            console.log("%s won !", msg.sender);

            uint256 prizeAmount = 0.001 ether;
            require(prizeAmount <= address(this).balance, "Trying to withdraw more money than the contract has");
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract");
        }

        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
