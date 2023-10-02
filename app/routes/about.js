import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const About = () => html`
    <style>
        .about-content {
            display: block;
        }

        .about-content img.image {
            border-radius: 50%;
            width: 150px;
            border: 0;
            max-width: 100%;
            vertical-align: middle;
            float: left;
            margin-right: 2rem;
        }

        .info-title {
            margin: 30px 0 20px;
            font-size: 3.8rem;
            font-weight: 700;
            line-height: 1.1;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
        }

        .info p {
            font-size: 2rem;
            margin: 0 0 30px;
        }

        footer {
            padding: 10px 0;
            font-size: 1.4rem;
            letter-spacing: 1px;
            font-weight: 700;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
            text-transform: uppercase;
        }

        footer a.contact {
            text-decoration: none;
            background-color: transparent;
            color: #999;
            border-bottom: none;
            font-size: 1.4rem;
        }

        footer a.contact:hover {
            text-decoration: none;
            background-color: transparent;
            color: #333;
            outline: 0;
            transition: all 0.4s;
            border-bottom: none;
        }
    </style>
    <${Page}
        title="About"
        subtitle="React Drive CMS Demo"
        description="An easy way to publish articles directly from Google Drive"
        sidebarImage=${prefixUriIfNeeded('/assets/default-about.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            <img
                src=${prefixUriIfNeeded('/assets/react_logo.png')}
                class="image"
            />
            <div class="info">
                <h1 class="info-title">The Economic Weekly </h1>
                <p>
                   Kenya’s growing public debt bill spells doom for the incoming government that will take over in August when the East African nation holds its General Elections. However, the new government will take over a nation plagued with both foreign and domestic debts.

                </p>
                <p>                   
Central Bank of Kenya (CBK) quarterly economic report shows that Kenya’s gross public debt was Ksh8.2 trillion as at December 31, 2021 an increase from the Ksh7.2 trillion at the end of 2020. Foreign debt accounted for 50.9 percent of the total debt stock while domestic debt accounted for 49.1 percent. 
                </p>
            </div>
        </div>

        <footer>
            <a
                href="${prefixUriIfNeeded('/contact')}"
                class="contact"
                onClick=${avoidReload}
            >
                Contact
            </a>
        </footer>
    <//>
`
