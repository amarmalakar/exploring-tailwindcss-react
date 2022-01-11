import svgIcon from '../undraw_profile_data_re_v81r.svg';

const Contact = () => {
    return (
        <div className="w-full lg:w-9/12 xl:w-10/12 m-auto px-2 py-4">
            <h1 className="text-3xl font-semibold text-cyan-600 my-2">Contact Page</h1>
            <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam soluta distinctio magnam eos at corporis quam et illum voluptate, ad ea dolorem. Quis, aliquam, magni quod cumque vitae, natus soluta repudiandae optio in similique nesciunt?</p>

            <div className="w-full sm:w-10/12 p-4 bg-white mx-auto my-8 rounded shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-cyan-600 my-2">Lets talk about <br />everything!</h2>
                        <p className="mt-8 mb-3">Hate forms? Send us an email instead.</p>
                        <img src={svgIcon} className="w-8/12 m-auto md:w-full" />
                    </div>
                    <div>
                        <div className='mb-8'>
                            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                        </div>
                        <div className='mb-8'>
                            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" />
                        </div>
                        <div className="mb-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <button
                            className="bg-cyan-600 w-full shadow-md p-2 rounded text-white hover:bg-cyan-700 active:animate-ping">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
