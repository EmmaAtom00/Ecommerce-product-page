import arrL from './assets/images/icon-previous.svg'
import arrR from './assets/images/icon-next.svg'
import minus from './assets/images/icon-minus.svg'
import plus from './assets/images/icon-plus.svg'
import cart from './assets/images/white-cart.svg'
import dele from './assets/images/icon-delete.svg'
import close from './assets/images/icon-close.svg'

import './index.css'

import { products } from './data'
import { useState } from 'react';
import { nullFunction } from './Navbar'


function Section({setcartElements, cartElements}) {

    const [value, setValue] = useState(0);
    const [noProduct, setNoProduct] = useState(0);
    const [imag, setImages] = useState(0);

    const nextProduct = ()=> {
        const len = products.length;
        setValue(value < len - 1 ? value + 1 : len - 1);
    }
    const prevProduct = ()=> {
        setValue(value > 0 ? value - 1 : 0);
    }

    const prevImg = () => {
        setImages(imag > 0 ? imag - 1 : 0);
    }

    const nextImg = () => {
        setImages(imag < 3 ? imag + 1 : 3);
    }

    function increaseNoProduct() {
        setNoProduct(noProduct + 1);
    }

    function decreaseNoproduct() {
        setNoProduct(noProduct > 0 ? noProduct - 1 : 0);
    }
    const addToCart = (value, imag, noProduct) => {
        const product = {
            Pimage: products[value].images[imag],
            Pname: products[value].productName,
            Pprice: products[value].discuntedPrice,
            quatity: noProduct,
            total: products[value].discuntedPrice * noProduct,
            deleteIcon: dele,
            PId: products[value].productId,
        }
        
        if (product.quatity < 1)
        {
            nullFunction();
        }
        else
        {
            setcartElements([...cartElements, product]);
        }
        // console.log(cartElements);
    }

    function displayImg(id) {
        setImages(id);
    }


    function thumbnail() {
        const thum = document.querySelector('.thumbnail');
        thum.classList.toggle('hidden')
    }

  return (
    <>
        <section className='overflow-hidden md:flex md:w-[80%] md:mx-auto md:justify-between items-center'>
            <div className='relative md:rounded-xl md:mt-[100px]'>
                <img src={products[value].images[imag]} alt="HeroImg" className='w-[100%] h-72 md:h-[400px] md:w-[350px] lg:w-[550px] object-cover md:rounded-xl' onClick={thumbnail}/>
                <div className='navigateKeys absolute top-[150px] flex justify-between w-[80%] mx-[50%] -translate-x-[50%]'>
                    <img src={arrL} alt="previous arrow" className='bg-WhiteH rounded-full p-4 h-12 w-12 cursor-pointer md:hidden' onClick={prevImg} />
                    <img src={arrR} alt="next arrow" className='bg-WhiteH rounded-full p-4 h-12 w-12 cursor-pointer md:hidden' onClick={nextImg}/>
                </div>

                <div className='hidden mt-8 md:flex gap-5 justify-center mx-auto'>
                    {products[value].images.map((images, i) =>
                        {
                       return <div className='relative'>
                            <img key={i} src={images} alt="HeroImg" className={`active ${imag == i ? "border-OrangeH border-2" : "border-2 border-[transparent]" } object-cover  w-14 h-[55px] rounded-xl displayImg hover:border-OrangeH `} onMouseEnter={() => {displayImg(i)}}/>
                            <div className={`${imag == i && "bg-whitelow rounded-xl absolute top-0 w-14 h-[55px]"}`}></div>
                        </div>
                        }
                    )}
                </div>
            </div>

            <div className='md:mt-[100px] md:w-[50%] md:ml-10'>
                <div className='w-[90%] mx-auto md:w-[100%]'>
                    <div>
                        <h4 className='text-OrangeH font-bold text-sm my-4'>{products[value].company}</h4>
                        <h2 className='font-bold text-3xl mb-5'>{products[value].productName}</h2>
                        <p className='text-DarkGrayishBlueH'>{products[value].description}</p>
                    </div>

                    <div className='flex justify-between my-7 items-center md:block'>
                        <div className='flex gap-4 items-center'>
                            <p className='text-3xl font-bold'>${products[value].discuntedPrice.toFixed(2)}</p>
                            <p className='bg-PaleOrangeH text-OrangeH p-2 rounded-md font-bold'>{products[value].discount}%</p>
                        </div>
                        <s className='text-GrayishBlueH text-[20px] md:text-sm'>${products[value].price.toFixed(2)}</s>
                    </div>

                    <div className='md:flex md:gap-1 md:items-center'>
                        <div className='flex justify-between items-center my-4 md:my-0 md:mx-0 md:py-3 md:px-4 w-auto mx-auto bg-LightGrayishblueH rounded-md px-8 py-4 md:gap-6'>
                            <img src={minus} alt="minus" className='cursor-pointer' onClick={decreaseNoproduct} />
                            <p className='font-bold'>{noProduct}</p>
                            <img src={plus} alt="minus" className='cursor-pointer' onClick={increaseNoProduct} />
                        </div>

                        <div onClick={() => {addToCart(value, imag, noProduct)}} className='bg-OrangeH rounded-md items-center cursor-pointer flex gap-2 text-WhiteH py-3 md:px-3 justify-center mb-4 md:mb-0'>
                            <img src={cart} alt="cart" className='md:w-6' />
                            <p className='font-bold'>Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
       
        <div className='bg-WhiteH flex justify-center gap-2 w-[90%] mx-auto mt-14 mb-4'>
            <p onClick={prevProduct} className='cursor-pointer text-sm hover:text-OrangeH'>Prev</p>
            <p onClick={nextProduct} className='cursor-pointer text-sm hover:text-OrangeH'>Next</p>
        </div>

        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Emmanuel Olarewaju</a>.
        </div>

        <div className='thumbnail md:bg-blacklow hidden scale-[0] md:justify-center duration-500 ease-in-out md:scale-[100%] md:absolute md:top-0 md:w-full md:h-full'>
            <div className='my-[200px] '>
                <div className='flex items-center justify-center'>
                    <div className="relative w-[400px]">
                        
                    <img src={products[value].images[imag]} alt="HeroImg" className='mt-6 mx-[50%] -translate-x-[50%] md:h-[300px] md:w-auto object-cover md:rounded-xl'/>
                    <img src={close} alt="close" className='w-3 absolute right-12 -top-6  cursor-pointer' onClick={thumbnail}/>

                    <div className='navigateKeys absolute top-[40%] flex justify-between w-[350px] mx-[50%] -translate-x-[50%]'>
                        <img src={arrL} alt="previous arrow" className='bg-WhiteH rounded-full p-4 h-12 w-12 cursor-pointer' onClick={prevImg} />
                        <img src={arrR} alt="next arrow" className='bg-WhiteH rounded-full p-4 h-12 w-12 cursor-pointer' onClick={nextImg}/>
                    </div>
                    </div>
                </div>
                <div className='hidden mt-8 md:flex gap-5 justify-center mx-auto'>
                    {products[value].images.map((images, i) =>
                        {
                       return <div className='relative'>
                            <img key={i} src={images} alt="HeroImg" className={`active ${imag == i ? "border-OrangeH border-2" : "border-2 border-[transparent]" } object-cover  w-14 h-[55px] rounded-xl displayImg hover:border-OrangeH `} onMouseEnter={() => {displayImg(i)}}/>
                            <div className={`${imag == i && "bg-whitelow rounded-xl absolute top-0 w-14 h-[55px]"}`}></div>
                        </div>
                        }
                    )}
                </div>
            </div>
        </div>
    </>
  )
}
export default Section

