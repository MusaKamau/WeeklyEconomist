import { html } from '../lib/htm-preact.js'

import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { PostsAndCategories } from '../components/layout/postsAndCategories.js'

export const Home = ({ state, dispatch }) => html` <${Page}
    title="WEEKLY ECONOMIC NEWS"
    subtitle="By JAMES GITOGO"
    description="Explore the latest economic news and insights. Stay informed about global economic trends and developments."
    sidebarImage=${prefixUriIfNeeded('WeeklyEconomist/assets/default-about.jpg')}
    showLinks=${false}
>
    <${PostsAndCategories} state=${state} dispatch=${dispatch} />
<//>`
