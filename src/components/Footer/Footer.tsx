import { footer } from './Footer.css';

export function Footer() {
    return (
        <footer className={footer} aria-label="Site footer">
            &copy; {new Date().getFullYear()} Kenneth Ofosu. All rights reserved.
        </footer>
    )
}