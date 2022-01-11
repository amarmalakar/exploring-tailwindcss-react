import { useEffect, useState } from "react";

const Home = () => {
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        fetchImage()
    }, [])

    const fetchImage = async () => {
        const res = await fetch('https://picsum.photos/v2/list?page=1&limit=6');
        const data = await res.json();
        setImageList(data)
    }

    // console.log(imageList);

    return (
        <div className="w-full lg:w-9/12 xl:w-10/12 m-auto px-2 py-4">
            <h1 className="text-3xl font-semibold text-cyan-600 my-2">Home Page</h1>
            <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam soluta distinctio magnam eos at corporis quam et illum voluptate, ad ea dolorem. Quis, aliquam, magni quod cumque vitae, natus soluta repudiandae optio in similique nesciunt?</p>
            
            <h2 className="text-2xl my-2 mt-8 font-semibold">Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {imageList.map(image => (
                    <div className="w-full" key={image.id}>
                        <img src={`${image.download_url}`} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;