import Link from 'next/link'
import style from './header.module.scss';

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div className={style.demo}>
            asdasda
        </div>
        <ul className='menu'>
            <li><Link href="/"><a className='menu__item'>Home page</a></Link></li>
            <li><Link href="/about"><a className='menu__item'>About</a></Link></li>
            <li><Link href="/products"><a className='menu__item'>Product</a></Link></li>
            <li><Link href="/signup"><a className='menu__item'>SignUp</a></Link></li>
            <li><Link href="/signin"><a className='menu__item'>SignIn</a></Link></li>
        </ul>
    </div>
  )
}

export default Header