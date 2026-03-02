const photos = [
  { src: '/assets/img/personal/graduation.jpg', alt: 'Graduation' },
  { src: '/assets/img/personal/SIAM.JPG', alt: 'SIAM Conference' },
  { src: '/assets/img/personal/SfN.JPG', alt: 'SfN Conference' },
  { src: '/assets/img/personal/TA.jpg', alt: 'Teaching' },
  { src: '/assets/img/personal/diwali.jpg', alt: 'Diwali' },
  { src: '/assets/img/personal/pic1.jpg', alt: '' },
]

function PhotoStrip() {
  return (
    <div>
      {photos.map((photo, i) => (
        <img key={i} src={photo.src} alt={photo.alt} />
      ))}
    </div>
  )
}

export default PhotoStrip