import { GA_TRACKING_ID } from 'src/lib/gtag'

{
  /* Global Site Tag (gtag.js) - Google Analytics */
}
const Analytics: React.FC = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: ` window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname, });
`,
      }}
    />
  </>
)

export default Analytics
