const About = () => {
    return (
        <div className="w-full lg:w-9/12 xl:w-10/12 m-auto px-2 py-4">
            <h1 className="text-3xl font-semibold text-cyan-600 my-2">About Page</h1>
            <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam soluta distinctio magnam eos at corporis quam et illum voluptate, ad ea dolorem. Quis, aliquam, magni quod cumque vitae, natus soluta repudiandae optio in similique nesciunt?</p>

            <div className="w-10/12 m-auto sm:max-w-sm rounded shadow-xl overflow-hidden my-6">
                <img className="w-full" src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <div className="px-6 py-4">
                    <div className="font-semibold text-xl text-cyan-600 mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About
