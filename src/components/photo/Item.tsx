import Image from 'next/image'
import {PhotoProvider, PhotoView} from "react-photo-view"

import {images} from "../../libs/photosTool"

interface IProps {
  currentDate: string
}

function Item(props: IProps) {
  const {currentDate} = props

  const getPhotosByDate = (date: string) => images.filter(photo => photo.date.includes(date))

  return (
    <>
      <PhotoProvider>
        <div className={'flex gap-2 mb-4'}>
          {getPhotosByDate(currentDate).map(photo => (
            <PhotoView key={photo.alt} src={photo.src}>
              <Image
                src={photo.src}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                className={'cursor-pointer'}
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  )
}

export default Item
