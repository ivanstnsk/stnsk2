import React from 'react';

import { SvgIconInnerProps } from '../types';


export const BackendIcon: React.FC<SvgIconInnerProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M49.7675 12.276C49.2418 10.2026 47.3568 8.66357 45.1182 8.66357C44.1429 8.66357 43.2353 8.95631 42.4775 9.45729C42.4368 9.48037 42.3991 9.50709 42.3632 9.5358C41.1303 10.4028 40.3225 11.8334 40.3225 13.4497C40.3225 16.0888 42.4738 18.2358 45.1182 18.2358C47.7625 18.2358 49.9138 16.0888 49.9138 13.4497C49.9138 13.0521 49.8641 12.666 49.7722 12.2965C49.7706 12.2896 49.7691 12.2828 49.7675 12.276ZM47.6055 11.7144C46.4781 11.8771 45.3823 12.2159 44.3623 12.7194C44.2778 12.0202 44.1424 11.329 43.9577 10.6514C44.3154 10.5035 44.7072 10.4214 45.1179 10.4214C46.1459 10.4214 47.0555 10.9334 47.6055 11.7144ZM45.1181 16.478C43.443 16.478 42.0802 15.1196 42.0802 13.4497C42.0802 12.9162 42.2199 12.4147 42.4639 11.9789C42.5843 12.5861 42.6624 13.2031 42.6937 13.8259C42.7145 14.2207 42.936 14.5662 43.2859 14.7502C43.4472 14.835 43.625 14.8772 43.803 14.8772C44.0065 14.8772 44.2104 14.822 44.3899 14.712C45.5336 14.0047 46.8221 13.5638 48.1552 13.4165C48.1553 13.4276 48.156 13.4385 48.156 13.4497C48.1559 15.1196 46.7933 16.478 45.1181 16.478Z" fill={color} />
        <path d="M59.9959 22.1804C59.8937 17.8529 57.1958 14.0109 53.2045 12.3938C53.6266 12.0628 54.1572 11.561 54.5302 11.1959C55.189 10.5509 55.3268 9.54375 54.8655 8.74676L54.0712 7.37438C53.6111 6.57949 52.6712 6.19605 51.7855 6.44168C51.2745 6.58336 50.5607 6.79453 50.0621 6.99574C49.9923 7.02387 49.9095 7.01707 49.841 6.97758L48.3711 6.13102C48.3028 6.09176 48.2558 6.02379 48.2454 5.94961C48.1704 5.4177 47.9975 4.69828 47.8657 4.18852C47.6354 3.29719 46.8322 2.6748 45.9125 2.6748H44.3216C43.4019 2.6748 42.5987 3.2973 42.3684 4.18852C42.2366 4.69828 42.0637 5.41758 41.9886 5.94973C41.9782 6.02391 41.9312 6.09176 41.8629 6.13102L41.8333 6.14801C39.1199 2.28305 34.7554 0 29.9942 0C26.3697 0 22.902 1.34648 20.2297 3.79125C19.8716 4.11891 19.8468 4.67484 20.1745 5.03297C20.5023 5.39121 21.0582 5.41582 21.4162 5.08816C23.7637 2.94059 26.81 1.75781 29.9942 1.75781C34.1155 1.75781 37.8984 3.70535 40.2895 7.01063C40.2494 7.01496 40.2089 7.01051 40.172 6.99563C39.6729 6.7943 38.9592 6.58324 38.4484 6.44156C37.5627 6.19594 36.6226 6.57937 36.1626 7.37414L35.3682 8.74664C34.907 9.54375 35.0449 10.5509 35.7036 11.1957C36.0807 11.565 36.6194 12.0746 37.0439 12.4054C37.1027 12.4512 37.1377 12.5254 37.1377 12.6038V14.2948C37.1377 14.3732 37.1026 14.4475 37.0439 14.4932C36.6198 14.8236 36.0809 15.3334 35.7036 15.7028C35.0449 16.3475 34.907 17.3546 35.3682 18.1519L36.1626 19.5244C36.6227 20.3193 37.5629 20.7029 38.4484 20.457C38.9588 20.3154 39.6723 20.1045 40.1717 19.9029C40.2416 19.8748 40.3241 19.8814 40.3929 19.9211L41.8627 20.7676C41.9311 20.8069 41.9779 20.8747 41.9885 20.9491C42.0635 21.4809 42.2363 22.2004 42.3682 22.7101C42.5986 23.6013 43.4018 24.2238 44.3213 24.2238H45.9122C46.8318 24.2238 47.635 23.6013 47.8653 22.7101C47.9972 22.2001 48.1701 21.4807 48.245 20.9489C48.2554 20.8746 48.3025 20.8068 48.3706 20.7675L49.8406 19.9209C49.9093 19.8813 49.9919 19.8745 50.0615 19.9028C50.5609 20.1042 51.2744 20.3153 51.785 20.4568C52.6711 20.7025 53.6108 20.319 54.0708 19.5243L54.865 18.1518C55.3264 17.3546 55.1885 16.3475 54.5298 15.7027C54.1524 15.3333 53.6136 14.8235 53.1895 14.493C53.1308 14.4472 53.0956 14.373 53.0956 14.2946V14.2679C56.1368 15.7406 58.1573 18.8 58.2382 22.2216C58.2959 24.6914 57.3787 27.0232 55.6554 28.7872C53.9322 30.5517 51.6248 31.5234 49.1587 31.5234H27.1057C26.6203 31.5234 26.2268 31.917 26.2268 32.4023C26.2268 32.8877 26.6203 33.2812 27.1057 33.2812H37.6746V38.5547H22.3233V33.2812H23.2686C23.754 33.2812 24.1475 32.8877 24.1475 32.4023C24.1475 31.917 23.754 31.5234 23.2686 31.5234H10.8391C8.37302 31.5234 6.06571 30.5517 4.34212 28.7875C2.61876 27.0233 1.70153 24.6916 1.75931 22.222C1.87696 17.2651 6.01134 13.2885 10.9699 13.3604C12.609 13.3832 14.2106 13.8489 15.6041 14.7088C15.9374 14.9132 16.3591 14.9268 16.7049 14.7451C17.0549 14.561 17.2762 14.2153 17.2972 13.8187C17.4056 11.6837 18.0566 9.59707 19.1798 7.7843C19.4355 7.37168 19.3084 6.82992 18.8958 6.57422C18.4831 6.3184 17.9414 6.44566 17.6857 6.85828C16.5847 8.63496 15.8822 10.6424 15.629 12.7158C14.1915 12.0074 12.6079 11.625 10.9945 11.6027C5.07102 11.5195 0.142353 16.2635 0.00184474 22.1805C-0.0670615 25.1276 1.0277 27.9102 3.08458 30.0157C5.14181 32.1216 7.89559 33.2812 10.8391 33.2812H20.5654V38.5547H17.4601C16.3015 38.5547 15.2812 39.2788 14.9211 40.3573L12.9044 46.4182C12.8806 46.4897 12.7141 47.289 12.7141 47.6366V56.5429C12.7141 58.4491 14.2649 59.9999 16.1711 59.9999H43.8269C45.7332 59.9999 47.284 58.4491 47.284 56.5429V47.6366C47.284 47.2132 47.2071 46.8076 47.0672 46.4324C47.0661 46.4289 47.0655 46.4254 47.0645 46.422L45.0766 40.3563C44.7168 39.2787 43.6966 38.5546 42.5379 38.5546H39.4325V33.2811H49.1588C52.1022 33.2811 54.8561 32.1214 56.9133 30.0157C58.97 27.9102 60.0648 25.1277 59.9959 22.1804ZM53.3005 16.959C53.3849 17.0416 53.4028 17.1701 53.3441 17.2716L52.5498 18.6441C52.4908 18.746 52.3697 18.7949 52.2551 18.7634C51.595 18.5803 51.0497 18.4062 50.7194 18.2729C50.1444 18.0411 49.5044 18.0868 48.9637 18.3981L47.4937 19.2446C46.952 19.5567 46.5916 20.0886 46.5048 20.7039V20.704C46.4553 21.0554 46.3342 21.6117 46.1639 22.2705C46.1341 22.3859 46.0308 22.4664 45.9125 22.4664H44.3216C44.2033 22.4664 44.1 22.3859 44.0702 22.2705C43.8999 21.6118 43.7788 21.0554 43.7292 20.7041C43.6425 20.0888 43.282 19.5568 42.7401 19.2448L41.2704 18.3982C40.9576 18.218 40.6115 18.1268 40.2641 18.1268C40.0108 18.1268 39.7569 18.1752 39.5145 18.273C39.1842 18.4063 38.6388 18.5804 37.9789 18.7635C37.8644 18.795 37.7431 18.7461 37.6842 18.6442L36.8899 17.2718C36.8312 17.1703 36.8491 17.0419 36.9335 16.9593C37.4212 16.4818 37.8441 16.0985 38.1246 15.8801C38.6148 15.498 38.8958 14.9204 38.8958 14.2951V12.6041C38.8958 11.9788 38.6147 11.4011 38.1246 11.0193C37.8439 10.8006 37.421 10.4173 36.9335 9.94008C36.8491 9.85746 36.8312 9.72891 36.8898 9.62754L37.6842 8.25504C37.7431 8.15309 37.8644 8.10398 37.9789 8.13574C38.6391 8.31879 39.1845 8.49293 39.5145 8.62605C40.0895 8.85797 40.7295 8.81238 41.2702 8.5009L42.0181 8.07012C42.0187 8.06977 42.0193 8.06953 42.0199 8.06918C42.0201 8.06906 42.0204 8.06883 42.0206 8.06871L42.7401 7.65434C43.282 7.34227 43.6425 6.81035 43.7291 6.19523C43.7788 5.84355 43.8998 5.28715 44.0701 4.62844C44.0999 4.51324 44.2032 4.43273 44.3215 4.43273H45.9123C46.0305 4.43273 46.1339 4.51324 46.1636 4.62855C46.3339 5.28727 46.455 5.84355 46.5047 6.19523C46.5915 6.81047 46.9518 7.34227 47.4936 7.65434L48.9636 8.50102C49.5044 8.8125 50.1444 8.85809 50.7194 8.62605C51.0492 8.49305 51.5946 8.31891 52.2549 8.13574C52.3692 8.10398 52.4906 8.15309 52.5495 8.25504L53.3438 9.62742C53.4025 9.72891 53.3846 9.85734 53.3002 9.93996C52.8127 10.4171 52.3897 10.8005 52.1093 11.019C51.6191 11.4009 51.3379 11.9786 51.3379 12.604V14.295C51.3379 14.9203 51.6191 15.498 52.1093 15.88C52.3898 16.0983 52.8127 16.4816 53.3005 16.959ZM45.526 56.543C45.526 57.4799 44.7637 58.2422 43.8268 58.2422H16.171C15.2341 58.2422 14.4718 57.4799 14.4718 56.543V47.6367C14.4718 46.6998 15.2341 45.9375 16.171 45.9375H43.8268C44.7637 45.9375 45.526 46.6998 45.526 47.6367V56.543ZM43.4076 40.9084L44.5015 44.2463C44.2831 44.2029 44.0577 44.1797 43.8267 44.1797H16.171C15.934 44.1797 15.7023 44.2038 15.4784 44.2494L16.5886 40.9131C16.7086 40.5538 17.0587 40.3125 17.46 40.3125H42.5377C42.939 40.3125 43.2892 40.5539 43.4076 40.9084Z" fill={color} />
        <path d="M42.8902 47.6953H17.1094C16.624 47.6953 16.2305 48.0888 16.2305 48.5742V55.6055C16.2305 56.0909 16.624 56.4844 17.1094 56.4844H33.6799C34.1653 56.4844 34.5588 56.0909 34.5588 55.6055C34.5588 55.1201 34.1653 54.7266 33.6799 54.7266H17.9883V49.4531H19.8625V50.5664C19.8625 52.0202 21.0452 53.2031 22.4991 53.2031C23.953 53.2031 25.1358 52.0204 25.1358 50.5664V49.4531H25.7224V50.5664C25.7224 52.0202 26.9052 53.2031 28.359 53.2031C29.813 53.2031 30.9957 52.0204 30.9957 50.5664V49.4531H42.0111V54.7266H37.506C37.0206 54.7266 36.6271 55.1201 36.6271 55.6055C36.6271 56.0909 37.0206 56.4844 37.506 56.4844H42.8901C43.3754 56.4844 43.769 56.0909 43.769 55.6055V48.5742C43.7691 48.0888 43.3756 47.6953 42.8902 47.6953ZM23.378 50.5664C23.378 51.051 22.9838 51.4453 22.4991 51.4453C22.0145 51.4453 21.6203 51.0511 21.6203 50.5664V49.4531H23.378V50.5664ZM29.2381 50.5664C29.2381 51.051 28.8438 51.4453 28.3591 51.4453C27.8746 51.4453 27.4804 51.0511 27.4804 50.5664V49.4531H29.2381V50.5664Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
