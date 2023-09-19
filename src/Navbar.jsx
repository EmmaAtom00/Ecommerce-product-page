import hamburger from './assets/images/icon-menu.svg'
import logo from './assets/images/logo.svg'
import cart from './assets/images/icon-cart.svg'
import imag from './assets/images/image-avatar.png'
import close from './assets/images/icon-close.svg'
import dele from './assets/images/icon-delete.svg'
import imgH from './assets/images/image-product-1.jpg'

import './index.css'


let n = 0;

export const NullQuantity = () => {
    return <p className='text-center'>You have 0 quatity...please increase your quatity to at least 1</p>
}

function Navbar({cartElements, setcartElements}) {
    function menu() {
        const close = document.querySelector('.menuDrop');
        close.classList.toggle('-translate-x-[100%]');
    }

    function cartSelect() {
        const cart = document.querySelector('.mycart');
        cart.classList.toggle('hidden');
    }

    function removeElement(i) {
        let n;
        let newArray = []
        for (n = 0; n < cartElements.length; n++)
        {
            if (n !== i)
            {
                newArray.push(cartElements[n]);
            }
        }
        setcartElements(newArray);
    }

  return (
    <nav className={`bg-WhiteH md:static fixed z-30 w-full shadow-lg`}>
        <div className='w-[90%] mx-auto flex justify-between items-center wrapper'>
            <div className='flex items-center gap-4 logo'>
                <img src={hamburger} className='cursor-pointer md:hidden' onClick={menu} />
                <img src={logo} className='cursor-pointer py-4' />

                <div className='men hidden text-GrayishBlueH md:flex md:gap-4 ml-3'>
                    <p className='py-4 hover:border-b-2 hover:border-b-OrangeH'>Collections</p>
                    <p className='py-4 hover:border-b-2 hover:border-b-OrangeH'>Women</p>
                    <p className='py-4 border-b-2 border-white hover:border-b-OrangeH'>Men</p>
                    <p className=' py-4 hover:border-b-2 hover:border-b-OrangeH'>About</p>
                    <p className='py-4 hover:border-b-2 hover:border-b-OrangeH'>Contact</p>
                </div>
            </div>

            <div className='absolute top-14 left-[50%] z-50 -translate-x-[50%] w-[70%] bg-red-400 py-4 px-2 hidden rounded-md nullQ'>
                <img src={close} alt="close" className='mb-2 w-[3%] cursor-pointer' onClick={nullFunction}/>
                <NullQuantity/>
            </div>

            <div className='flex relative group items-center gap-4 justify-end cart'>
                <img src={cart} className='w-150%] h-auto cursor-pointer group' onClick={cartSelect}/>
                <img src={imag} className='w-[20%] cursor-pointer profilePic'/>
                <section className=' group-hover:scale-100 scale-100 transition absolute right-12 top-0 border-red-500'>
                    {cartElements.length > 0 &&
                    <p className='bg-OrangeH px-1 text-WhiteH rounded-full text-[8px] absolute z-10 -translate-x-[0%]'>
                        {cartElements.length}
                    </p>}
                </section>

            </div>
            
        </div>


        <div className='menuDrop bg-WhiteH top-0 w-1/2 h-[100vh] overflow-hidden duration-500 ease-in-out -translate-x-[100%] z-20'>
            <div className='pl-10 pt-8'>
                <img src={close} alt="close" className='mb-16 w-[7%] cursor-pointer md:hidden' onClick={menu}/>
                <div className='men font-bold md:flex md:gap-3'>
                    <p className='text-1xl pb-6'>Collections</p>
                    <p className='text-1xl pb-6'>Men</p>
                    <p className='text-1xl pb-6'>Women</p>
                    <p className='text-1xl pb-6'>About</p>
                    <p className='text-1xl pb-6'>Contact</p>
                </div>
            </div>
        </div>

        


        <div className='bg-WhiteH w-[330px] shadow-xl h-[fit-content] absolute hidden z-10 top-[75px] rounded-lg mx-[50%] -translate-x-[50%] md:mx-[75%] mycart'>
            <div>
                <p className="font-bold p-5">Cart</p>
                <hr/>
            </div>


            <div className='innerE'> {cartElements.length <= 0 ? <p className='text-DarkGrayishBlueH font-bold text-center my-8 emptyCart'>Your cart is empty</p> :
                <>
                {cartElements.map((person, i) =>
                <div key = {i} className="justify-between flex items-center mx-5 my-3">
                    <img src={person.Pimage} alt="product image" className='w-12 rounded-lg' />
                    <div>
                        <p className='text-[15px]'>{person.Pname} {i}</p>
                        <p className='text-[15px]'>${person.Pprice.toFixed(2)} x {person.quatity} <b>${person.total.toFixed(2)}</b></p>
                    </div>
                    <img src={dele} alt="delete icon" className='cursor-pointer' onClick={() => (removeElement(i))}/>
                </div>)}

                <div className="bg-OrangeH text-WhiteH cursor-pointer text-center p-4 mx-5 mb-4 rounded-md">
                    <p>Checkout</p>
                </div>
                </>}
            </div>
            

            <p className='text-DarkGrayishBlueH font-bold text-center my-8 hidden emptyCart'>Your cart is empty</p>
        </div>


    </nav>

  )
}
export default Navbar



export const nullFunction = () => {
    let name = document.querySelector('.nullQ');
    name.classList.toggle('hidden');
}




export const RCart = (prop) => {
    <>{
        prop.cartElements.length <= 0 ? <p>
            Your cart is empty
        </p>: <div>
        {prop.cartElements.map((person, i) => {
            console.log(person);
        return (
            <div key={i} className=' bg-black w-[330px] shadow-xl h-[fit-content] absolute z-10 top-[75px] rounded-lg mx-[50%] -translate-x-[50%] mycart'>
                <div>
                    <p className="font-bold p-5">hello</p>
                    <hr/>
                </div>


                <div className='innerE'>
                    <div className="justify-between flex items-center mx-5 my-3">
                        <img src={imgH} alt="product image" className='w-12 rounded-lg' />
                        <div>
                            <p className='text-[15px]'>Fall Limited Edition Sneakers</p>
                            <p className='text-[15px]'>$125.00 x 3 <b>$375.00</b></p>
                        </div>
                        <img src={dele} alt="delete icon" className='cursor-pointer' />
                    </div>

                    <div className="bg-OrangeH text-WhiteH cursor-pointer text-center p-4 mx-5 mb-4 rounded-md">
                        <p>Checkout</p>
                    </div>
                </div>

                <p className='text-DarkGrayishBlueH font-bold text-center my-8 hidden emptyCart'>Your cart is empty</p>
            </div>
        )
    })}
        </div>
    }
   
</>
}


const cartT = () => {
    if (n > 0)
    n = 0;
    const cartC = document.querySelector('.innerE');
    const emptyCart = document.querySelector('.emptyCart');
    cartC.classList.toggle('hidden');
    emptyCart.classList.toggle('hidden')
}
