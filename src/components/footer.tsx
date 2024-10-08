import Container from './container'
import kasbokar from '../images/kasbokar.webp';
import rezaiat from '../images/rezi.webp';
import telegram from '../images/footer/telegram-3-512.jpg'
import email from '../images/footer/email-14-512.jpg'
import github from '../images/footer/github-9-512.jpg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <Container>
            <div className='flex items-center justify-between pt-5 pb-4 border-t-4'>
                <div className='flex justify-between items-center gap-10  pl-5'>
                    <img width={80} src={kasbokar} alt="kasbokar" />
                    <img width={100} src={rezaiat} alt="rezi" />
                </div>
                <div className='flex flex-col items-center justify-center gap-4 pt-11'>
                    <div className='flex items-center justify-between gap-3'>
                        <a href='https://t.me/Mj_majlesi' target='_blank' rel="noreferrer">
                            <img width={40} src={telegram} alt="telegram" />
                        </a>
                        <a href='mohammadjavadmajlesi313@gmail.com' target='_blank' rel="noreferrer">
                            <img width={40} src={email} alt="email" />
                        </a>
                        <a href='https://github.com/mjmajlesi' target='_blank' rel="noreferrer">
                            <img width={40} src={github} alt="github" />
                        </a>
                    </div>
                    <div>
                        <span className='block text-center'> © 2024 Copyright: Mohammad Javad Majlesi </span>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center gap-2 pr-5'>
                    <h1 className='text-3xl'>Quick access</h1>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/store'}>Store</Link>
                    <Link to={'/card'} >CardShopping</Link>
                </div>
            </div>
            <div>
            </div>
        </Container>
    </div>
  )
}

export default Footer