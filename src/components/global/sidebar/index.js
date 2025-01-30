import './style.css';
import NavItem from "../../ui/nav-item";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <header>
                <div className="image-text">
                    <span class="image">
                        <svg width="34" height="32" viewBox="0 0 317 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3_9)">
                                <path
                                    d="M139.75 15H146.75L156.25 15.75L166.25 17.5L175.25 20L179 21.25L186.75 24.5L191.5 26.75L197.25 30L200.75 32L208.5 37.25L211.5 39.5L215.5 42.75L219 45.5L221.25 47.75L222.75 49L224.25 50.75L225.5 52L226.75 53L228.5 55L231.25 58L234 61.5L236.25 64L239.75 69L243.5 74.75L245.5 78.25L248 82.75L250 86.75L253.5 94.75L255 98.5L254.5 99.5L252 102L249.25 104.25L245.5 107.75L239.5 113.25L236.75 115.5L234.75 117.5L232.75 119.25L231 121L228.25 123.25L225.75 125.75H225.25L224.5 122.75L222.5 115.25L220 108.5L217.25 102L212.75 93L209.5 88L207.5 85L204 80.25L201.25 76.75L199 74.25L195.5 70.5L193.5 68.75L189.5 65.5L186.25 63L180.75 59.5L176.25 57L169.25 53.75L161.75 51.25L154.5 49.75L151.25 49.25L144.75 48.75L138.5 49L132.75 49.5L126.25 50.75L120.25 52.25L114.75 54.25L108.5 57L103.5 59.75L98 63.25L94.75 65.75L89.25 70.25L86.75 72.5L83.75 75.25L82 77.25L79.25 80L74 87L70.5 91.75L67 98.25L64 104L61.25 110.75L58.75 117.5L55.5 129L54.25 135.25L52.75 145.75L52 158V167.75L52.5 177L53.5 185L55 194L57.75 206.25L60 213.5L63 222L67 231L69.75 236.75L73.75 243.5L76 247.25L79.5 252L82.75 256.5L85 259L87 261.5L90 265L91.75 267L95.25 270.5L97.25 272.25L100 274.75L103.25 277.25L106.25 279.5L111 283L115.5 285.75L121.75 289.5L130.25 293.75L132 294.5L131.75 295L119.25 293.5L108.5 291L102.25 289.25L95 286.25L89 283.75L85.25 281.75L81.25 279.75L76 277L71.75 274L66.75 270.5L63.75 268.25L60.75 265.5L58.75 263.75L57 262L55 260.25L52.5 258L50.75 256.25L49 254.25L46.75 251.75L44.75 249.25L42.25 246L39.5 242L37.75 239.5L35.25 235.5L31.75 229.5L29.75 225.5L26.5 218.25L23.75 210.75L21.25 203.25L19.75 197L17.75 187L16.25 176.5L16 174V147.5L16.5 141L17.75 131.5L19.5 122L21 115.25L23.5 107L26 100L29 92.5L32 86.25L34.75 80.75L36.75 77.25L40.25 71.75L43.25 67.25L45.75 64L51.25 57L55 53L56.75 51.25L58.5 49.25L62 45.75L64.75 43.5L68 40.75L71.25 38.25L76.25 34.75L80.5 32L86.5 28.75L90.25 26.75L96 24.25L103.25 21.5L108 20L116.75 17.75L122.25 16.75L129.25 15.75L139.75 15Z"
                                    fill="#C147E9" />
                                <path
                                    d="M143.5 58.75L147 59L151.25 59.25L155.5 60L160.75 61.25L167.5 63.75L172.25 66L174.25 67.25L173.25 67.75L165.5 69.25L158.75 71L152.75 73.25L146.75 76L142.5 78.25L137.25 81.5L132 85.5L129.25 88L127.25 89.75L126.25 90.25V90.75L124.5 92.25L122.25 95L120.25 97.25L117.25 101.25L115 104.5L112.5 108.75L110.5 112.25L108.5 116.25L106 122L104.25 126.5L101.75 135.5L100 144.5L99 152.25L98.75 155.25V171.5L99.25 177.5L100.25 184.75L102 192.5L104 199L106.5 206L109.5 212.75L111.25 216.25L114.75 222.25L117.25 225.75L119.5 228.75L121.5 231.25L124.5 234.75L130.5 240.75L134 243.5L137.75 246.5L143 249.75L146.5 251.75L153.25 255L160.75 257.75L167.75 259.5L175.5 260.75L182 261.25L190.75 261L198.75 260L206 258.5L212.75 256.5L219.75 253.75L226.75 250.25L230 248.25L235.25 244.75L238 242.5L240.25 240.75L243.5 237.75L245.5 236L249.5 231.75L252.5 228L255.75 223.5L257.5 220.75L260.25 216.25L263.75 209.25L266.75 202L269.75 193L272.25 183.25L273.25 183.75L275.75 186L277.75 187.75L280.25 190L284 193.25L287.75 196.75L290.5 199L292.25 200.75L294.25 202.5L297.75 205.75L300.5 208L302 209.75L301.75 212L300 216L298.75 219.25L296.75 223.25L294.25 228L292.75 231L289 237.25L286.5 241L284 244.5L281.25 248.25L278.5 251.5L276.25 254.25L274.25 256.25L272.5 258.25L268 262.75L266 264.5L262.75 267.25L259.25 270L254.5 273.5L249 277L244.75 279.5L238 283L230.5 286.25L225.75 288L220.25 289.75L211.25 292L204.5 293.25L197.25 294.25L191 294.75H180L172 294.25L161.25 292.75L148.25 289.5L137 285.5L127 280.75L121 277.25L117 274.75L112.75 271.75L107.5 267.75L103.5 264L103 263.75V263.25L102 262.75L100 260.75L98 259L95 255.5L92.25 252.5L89 248.25L86.5 244.75L84.25 241.5L82.5 239L79.5 233.75L77 229L74.25 223.25L71.5 216.5L67.75 205.25L65.75 197L64 188L62.75 178.25L62.25 171.5V152.75L62.75 146.5L64 138L65.75 129.75L68.25 121L70.75 114.25L73 109L76 103L79 98L81.5 94.25L86 88.25L88.75 85L90.5 83L95.5 78L100.5 74L105 70.75L111 67.25L115 65.25L122 62.25L128.5 60.5L135.5 59.25L143.5 58.75Z"
                                    fill="#C147E9" />
                                <path
                                    d="M224.5 180.5H262.75L262.5 182.5L260.5 190.25L257.75 198.5L255 205L252 211L249.5 215L246.75 219L243.75 223L240.75 226.25L239 228.25L235.5 231.75L232.75 234L229 237L223.5 240.5L218.75 243L214.25 245L210 246.75L202 249L195.25 250.25L191.5 250.75L188.25 251H180.5L174.5 250.5L167 249L158.75 246.25L153 243.5L152.5 242.75L152.75 242.5L158.5 241.75L166.25 240L173.75 237.5L180.25 234.5L186.5 231.25L192.5 227.25L196 224.5L199.25 221.75L202.5 218.75L205.5 215.5L207.75 212.75L209.75 210.5L213.75 204.5L216.25 200.5L218.25 196.75L221 190.75L223.5 183.75L224.5 180.5Z"
                                    fill="#C147E9" />
                                <path
                                    d="M190.75 15H194.5L200.25 15.5L207.75 16.75L215 18.25L217.5 19L224.75 21.25L231.25 23.75L239.25 27.25L244.25 30L249.5 33L252 34.75L255.75 37.25L260.25 40.75L263.75 43.5L267.25 46.75L269.25 48.5L275.25 54.5L277.5 57.25L279.5 59.5L282.25 63L286 68L289.25 73L291.5 76.75L295.5 84L297.5 88.25L299.75 93.5L300.25 95.25H264.5L263.75 94.25L260.5 86.5L257.75 80.25L254.5 74.5L251.5 69L249.5 66L246.5 61.75L243.75 57.75L241.75 55.25L239.5 52.75L237.25 50L234.75 47.25L233 45.25L229.5 41.75L227.5 40L224.25 37L221.5 34.75L218 32L213.75 28.75L207.25 24.5L202.75 21.75L198.5 19.25L194.5 17.25L190.75 15.5V15Z"
                                    fill="#C147E9" />
                                <path
                                    d="M264.25 105H294L292.75 106.75L290.75 108.5L288.5 110.75L286.5 112.5L285.75 113.25H285.25V113.75L283.25 115.5L281 117.75L279 119.5L275.25 123L273 125.25L271 127L268 129.75L266.25 130H238V129.25L241 126.5L243.75 123.75L245.75 122L249.25 118.75L250.25 117.75H250.75L251.25 116.75L253.25 115L255.25 113L257.25 111.25L260.25 108.25L263 106L264.25 105Z"
                                    fill="#C147E9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_9">
                                    <rect width="317" height="298" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span className="text">
                        LisHealth
                    </span>
                </div>
                <button className="toggle-sidebar" onClick={toggleSidebar}>
                    <i className=
                        {`bx ${isOpen ? 'bx-chevrons-left' : 'bx-chevrons-right'}`}
                    ></i>
                </button>
            </header>
            <hr />
            <main>
                <ul className="nav-links">
                    <li className="search-box">
                        <form className="search-sidebar">
                            <input type="search" placeholder="Pesquisar..." required="true" />
                            <button type="submit"><i className="bx bx-search"></i></button>
                        </form>
                    </li>
                    <li>
                        <NavItem active={isActive("/")} icon="bxs-dashboard" content="Painel" route="/" />
                    </li>
                    <li>
                        <NavItem active={isActive("/food")} icon="bxs-bowl-hot" content="Alimentos" route="food" />
                    </li>
                    <li>
                        <NavItem active={isActive("/profile")} icon="bxs-user" content="Perfil" route="profile" />
                    </li>


                </ul>
            </main>
            <hr />
            <footer>
                <NavItem
                    route="/login"
                    active={false} icon="bx-log-out" content="Sair" />
            </footer>
        </nav>
    );
}

export default Sidebar;