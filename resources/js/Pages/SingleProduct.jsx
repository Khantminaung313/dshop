import { BsArrowLeft, BsArrowRight, BsHeart, BsStarFill, BsStarHalf } from 'react-icons/bs'
import Layout from './Layout'

const SingleProduct = () => {
  return (
    <Layout>
        <div className='w-full md:w-[768px] lg:w-[1080px] mx-auto mt-6 lg:mt-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 relative overflow-y-auto h-[700px]'>
                <div className='flex gap-4 h-[400px] lg:h-[700px] w-full sticky top-0 left-0'>
                    <div className='hidden lg:block products-box my-auto h-[95%] flex-col w-[80px] overflow-y-auto overflow-x-hidden'>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                        <div className='w-[72px] h-[72px] mb-2 border border-slate-200'>
                            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto md:w-full h-full p-2 relative'>
                        <img className='object-cover object-center w-full h-full' src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className='absolute bottom-4 right-4 inline-flex gap-4'>
                            <button> <BsArrowLeft  className='w-8 h-8 p-2 rounded-full bg-white text-center leading-6 text-xl'/> </button>
                            <button> <BsArrowRight className='w-8 h-8 p-2 rounded-full bg-white text-center leading-6 text-xl' /> </button>
                        </div>
                    </div>
                </div>
                <div className='px-4 lg:pe-8 lg:pl-16'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-4xl font-bold'>Air Force</h1>
                        <button>
                            <BsHeart className='w-10 h-10 rounded shadow active:scale-95 bg-white p-2 border'/>
                        </button>
                    </div>
                    <p className='mb-4'>Men's Air Force </p>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tempora laborum porro, iure assumenda eaque amet nemo voluptates labore similique asperiores libero incidunt. Corporis ipsam at veritatis totam error cupiditate adipisci nesciunt voluptatibus, a eaque inventore iure doloremque mollitia natus sapiente necessitatibus, harum, sint impedit itaque quis deserunt commodi. Atque rerum animi aut, numquam cum recusandae culpa id voluptas sint dolorem, unde eligendi iure exercitationem distinctio odio praesentium quaerat mollitia eius minima itaque optio at. Delectus, quos itaque illo molestiae, laborum consectetur corporis reiciendis minus debitis incidunt quibusdam nam ad tempore nihil quam aspernatur, eveniet veniam id vero dignissimos voluptatum.
                    </div>
                    <div className='flex gap-2 mb-8'>
                        <BsStarFill className='w-5 h-5'/>
                        <BsStarFill className='w-5 h-5'/>
                        <BsStarFill className='w-5 h-5'/>
                        <BsStarFill className='w-5 h-5'/>
                        <BsStarHalf className='w-5 h-5'/>
                    </div>
                    <div className='mb-8'><strong>$ 150</strong></div>
                    <div className='mb-8'>
                        <span>Colors</span>
                        <div className='flex gap-2 lg:gap-4 flex-wrap my-2'>
                            <div className='w-[79px] h-[79px] overflow-hidden border border-slate-200 hover:border-slate-800'>
                                <img className='object-cover object-center' src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                            <div className='w-[79px] h-[79px] overflow-hidden border border-slate-200 hover:border-slate-800'>
                                <img className='object-cover object-center' src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                            <div className='w-[79px] h-[79px] overflow-hidden border border-slate-200 hover:border-slate-800'>
                                <img className='object-cover object-center' src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                        </div>
                        <span>Color's Name</span>
                    </div>
                    <div className='mb-12'>
                        <strong>Sizes</strong>
                        <div className='flex flex-wrap gap-2 lg:gap-4 my-2'>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            <button className='bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0'>3.8</button>
                            
                        </div>

                    </div>
                    <div className='flex gap-4'>
                        <button className='basis-[80px] flex-grow py-2 text-center rounded bg-black dark:bg-d_gray text-white shadow border-slate-200 hover:tracking-widest d_transition'>Add to cart</button>
                        <button className='basis-[80px] flex-grow py-2 text-center rounded bg-white shadow border border-slate-200 hover:tracking-widest d_transition'>Checkout</button>
                    </div>
                </div>
            </div>
            <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias in ipsam, ratione nobis commodi, eum unde ullam odio esse consectetur dolorem fuga aut voluptatibus corrupti tempore, corporis voluptas aliquam. Quibusdam facere porro tempore odit quod! Pariatur praesentium obcaecati a quidem doloribus magni repellendus minus rerum magnam dolores ut, sit consequatur dignissimos atque possimus dicta quaerat perspiciatis ipsum officiis? Sapiente excepturi error, tenetur quia dignissimos veniam autem delectus nesciunt molestias, dicta cum optio iure corporis iste beatae amet quis ducimus possimus necessitatibus soluta suscipit tempora non. Ea, suscipit animi eius inventore pariatur dolorem quam obcaecati assumenda ab laudantium at nisi!
                </div>
        </div>
    </Layout>
  )
}

export default SingleProduct