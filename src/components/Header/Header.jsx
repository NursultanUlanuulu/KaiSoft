import { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Nav from './Nav'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Container } from '../../style/style'
import MobileNav from './MobileNav'

const Header = () => {
	const [visible, setVisible] = useState(true)
	const [menuOpen, setMenuOpen] = useState(false)

	const lastScrollTop = useRef(0)
	const headerRef = useRef(null)

	const handleScroll = useCallback(() => {
		const currentScrollTop =
			window.pageYOffset || document.documentElement.scrollTop

		setVisible(
			currentScrollTop < lastScrollTop.current || currentScrollTop < 100
		)
		lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const closeMenu = () => {
		setMenuOpen(false)
	}

	return (
		<StyledHeader ref={headerRef} visible={visible}>
			<Container>
				<div className='flex items-center justify-between'>
					<Logo />
					<div className='hidden md:flex ml-14'>
						<Nav />
					</div>
					<button className='inline-block py-5 md:hidden' onClick={toggleMenu}>
						{menuOpen ? (
							<CloseIcon sx={{ color: 'black' }} />
						) : (
							<MenuIcon sx={{ color: 'black' }} />
						)}
					</button>
				</div>
				<MobileNav isOpen={menuOpen} onClose={closeMenu} />
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	/* box-shadow: ${({ visible }) =>
		visible ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
	transform: translateY(${({ visible }) => (visible ? '0' : '-100%')}); */
	transition: transform 0.3s, box-shadow 0.3s;
	z-index: 1000;
`

export default Header
