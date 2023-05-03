import Image from 'next/image'
import {PhotoProvider, PhotoView} from "react-photo-view"

import styles from '../../styles/photo.module.css'

const images = [
  {
    date: '2022-11-30',
    src: '/photos/2022-11-30/01.jpg',
    width: 200,
    height: 200,
    alt: '2022-11-30_01'
  },
  {
    date: '2022-11-30',
    src: '/photos/2022-11-30/02.jpg',
    width: 200,
    height: 200,
    alt: '2022-11-30_02'
  },
  {
    date: '2022-11-30',
    src: '/photos/2022-11-30/03.jpg',
    width: 200,
    height: 200,
    alt: '2022-11-30_03'
  },
  {
    date: '2022-11-30',
    src: '/photos/2022-11-30/04.jpg',
    width: 200,
    height: 200,
    alt: '2022-11-30_04'
  },
  {
    date: '2022-11-30',
    src: '/photos/2022-11-30/05.jpg',
    width: 200,
    height: 200,
    alt: '2022-11-30_05'
  },
  {
    date: '2022-11-30',
    src: '/photos/2022-11-30/06.jpg',
    width: 200,
    height: 200,
    alt: '2022-11-30_06'
  },

  {
    date: '2022-11-28',
    src: '/photos/2022-11-28/01.jpg',
    width: 1048,
    height: 650,
    alt: '2022-11-28_01'
  },

  {
    date: '2022-03-04',
    src: '/photos/2022-03-04/01.jpg',
    width: 400,
    height: 400,
    alt: '2022-03-04_01'
  },
  {
    date: '2022-03-04',
    src: '/photos/2022-03-04/02.jpg',
    width: 400,
    height: 400,
    alt: '2022-03-04_02'
  },

  {
    date: '2021-07-11',
    src: '/photos/2021-07-11/01.jpg',
    width: 450,
    height: 650,
    alt: '2021-07-11_01'
  },
  {
    date: '2021-07-11',
    src: '/photos/2021-07-11/02.jpg',
    width: 800,
    height: 650,
    alt: '2021-07-11_02'
  },

  {
    date: '2021-04-24',
    src: '/photos/2021-04-24/01.jpg',
    width: 770,
    height: 650,
    alt: '2021-04-24_01'
  },
  {
    date: '2021-04-24',
    src: '/photos/2021-04-24/02.jpg',
    width: 550,
    height: 650,
    alt: '2021-04-24_02'
  },
  {
    date: '2021-04-24',
    src: '/photos/2021-04-24/03.jpg',
    width: 770,
    height: 650,
    alt: '2021-04-24_03'
  },

  {
    date: '2021-01-28',
    src: '/photos/2021-01-28/01.jpg',
    width: 1048,
    height: 780,
    alt: '2021-01-28_01'
  }
]

interface IProps {
  currentDate: string
}

function Item(props: IProps): JSX.Element {
  const {currentDate} = props

  const getPhotosByDate = (date: string) => {
    return images.filter(photo => photo.date.includes(date))
  }

  return (
    <>
      <PhotoProvider>
        <div style={{display: 'flex', gap: '16px'}}>
          {
            getPhotosByDate(currentDate).map(photo => (
              <PhotoView key={photo.alt} src={photo.src}>
                <Image
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  className={styles.pic}
                />
              </PhotoView>
            ))
          }
        </div>
      </PhotoProvider>
    </>
  )
}

export default Item
