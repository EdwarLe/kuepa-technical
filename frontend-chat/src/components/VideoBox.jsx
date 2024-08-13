import ReactPlayer from 'react-player'
const VideoBox = () => {
    const urlVideo = 'https://www.youtube.com/watch?v=LPzG0PnOzgA'
    return (
    <div className='w-full mx-auto flex justify-center h-48 sm:h-96'>
        <ReactPlayer
            url={urlVideo}
            playing={false}
            volume={0.5}
            height={'100%'}
        />
    </div>
    )
}

export default VideoBox