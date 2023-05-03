import Image from 'next/image'
import {PhotoProvider, PhotoView} from "react-photo-view"
import {images} from "./data"

import styles from '../../styles/photo.module.css'


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
