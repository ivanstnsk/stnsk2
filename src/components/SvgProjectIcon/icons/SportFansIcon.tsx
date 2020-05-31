import React from 'react';

import { SvgProjectIconInnerProps } from '../types';


export const SportFansIcon: React.FC<SvgProjectIconInnerProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 179 161" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43.96 65.5907C46.1874 72.3105 53.2327 75.7489 60.1029 74.6774C66.9734 73.6058 70.5422 69.7405 70.5422 63.9129C70.2926 61.1031 73.1577 58.717 75.8717 59.5337L83.7819 61.6757C84.7909 61.9488 85.8107 62.1285 86.8372 62.2138C86.0715 64.101 85.1654 65.9273 84.1281 67.6729C82.043 71.1813 79.4478 74.3463 76.4157 77.0792L70.6608 82.2656C66.3966 86.1085 62.9323 90.6612 60.3648 95.7959C59.7211 97.0835 60.2427 98.649 61.53 99.2927C62.7896 99.9311 64.3807 99.4273 65.0268 98.1274C67.3021 93.5769 70.3716 89.5435 74.1502 86.1379L79.9055 80.9515C83.3274 77.8669 86.2558 74.2956 88.609 70.3363C90.4902 67.1706 91.9883 63.7713 93.0613 60.2322C93.3221 59.3715 93.1211 58.4373 92.5288 57.7605C91.9366 57.0833 91.0374 56.7585 90.1497 56.9036C88.4695 57.1766 86.7854 57.0896 85.1447 56.6445L77.2338 54.5025C74.3747 53.7281 71.3848 54.3168 69.0316 56.1173C66.6787 57.9174 65.3296 60.6496 65.3296 63.6122C65.2471 72.2986 50.7257 71.4173 48.9077 63.9514L46.0238 55.2506C45.8182 54.6311 46.0039 53.9536 46.4965 53.5253L81.262 23.2851C81.7766 22.8373 82.0954 22.2056 82.1493 21.5256L83.2981 7.10103L88.1772 10.7838C89.425 11.7257 90.3392 13.0745 90.7514 14.5827L92.3264 20.3425C92.6075 21.4399 93.5878 22.1363 94.6761 22.294C99.2067 23.3649 103.49 25.1458 107.406 27.5885C108.628 28.3492 110.235 27.9776 110.997 26.7561C111.759 25.5349 111.386 23.927 110.165 23.1652C106.077 20.6162 101.636 18.7091 96.9496 17.4883L95.7791 13.2077C95.0645 10.594 93.4801 8.25579 91.3171 6.62311L84.6689 1.60517C83.5047 0.726602 81.9545 0.552497 80.6232 1.14928C79.2923 1.74746 78.3934 3.02249 78.2777 4.47756L77.0373 20.0506L43.0745 49.5919C40.9908 51.4046 40.2059 54.2696 41.0751 56.8906L43.96 65.5907Z" fill={color} />
      <path d="M174.46 117.307V115.518C174.46 113.103 173.47 110.748 171.745 109.058C170.531 107.784 168.186 106.139 168.359 104.129V94.0067C168.192 92.0192 170.406 90.4708 171.64 89.2461C173.432 87.5463 174.46 85.1546 174.46 82.6846V79.285C174.46 77.8464 173.73 76.5755 172.621 75.8218V71.294C172.621 69.3369 171.571 67.6248 170.008 66.6777V63.5809C170.008 62.1412 168.841 60.9746 167.402 60.9746C165.962 60.9746 164.795 62.1412 164.795 63.5809V65.8939H159.412V63.5809C159.412 62.1412 158.245 60.9746 156.806 60.9746C155.366 60.9746 154.199 62.1412 154.199 63.5809V65.8939H148.816V63.5809C148.816 62.1412 147.649 60.9746 146.209 60.9746C144.77 60.9746 143.603 62.1412 143.603 63.5809V66.6777C142.04 67.6252 140.99 69.3372 140.99 71.294V75.8218C139.882 76.5752 139.152 77.8464 139.152 79.2847V82.6842C139.152 85.1546 140.179 87.5463 141.971 89.2457C143.209 90.4753 145.416 92.0146 145.252 94.0064V104.129C145.429 106.133 143.075 107.79 141.866 109.057C140.141 110.748 139.152 113.103 139.152 115.518V117.101H127.956C126.497 111.881 126.192 106.339 127.083 100.992L131.992 71.5321C134.444 56.8181 130.02 42.1047 119.857 31.1651C118.877 30.11 117.228 30.0502 116.173 31.0295C115.119 32.0091 115.058 33.6585 116.038 34.713C125.093 44.4601 129.034 57.568 126.85 70.6755L121.941 100.135C121.005 105.756 121.228 111.564 122.572 117.101H59.3815L61.3841 108.791C61.7214 107.392 60.8603 105.984 59.4612 105.647C58.0621 105.31 56.6542 106.171 56.3168 107.57L54.0199 117.102H40.3778V115.518C40.3778 113.103 39.3884 110.748 37.6631 109.058L35.4273 106.867C34.6963 106.15 34.2771 105.153 34.2771 104.129V94.0064C34.11 92.0188 36.3237 90.4704 37.5585 89.2457C39.3503 87.5459 40.3778 85.1542 40.3778 82.6842V79.2847C40.3778 76.9772 38.5007 75.0998 36.193 75.0998H33.9345C34.9162 73.2756 35.4504 71.2115 35.4504 69.0691C35.4504 62.0514 29.7413 56.3422 22.7236 56.3422C15.7059 56.3422 9.99673 62.0514 9.99673 69.0691C9.99673 71.2108 10.5316 73.2752 11.5133 75.0998H9.25416C6.94674 75.0998 5.06969 76.9772 5.06969 79.2847V82.6842C5.06969 85.1546 6.09754 87.5463 7.88894 89.2457C9.1276 90.4753 11.334 92.0146 11.1704 94.0064V104.129C11.1704 105.153 10.7512 106.15 10.0202 106.867L7.78405 109.058C6.05908 110.748 5.06969 113.103 5.06969 115.518V117.193C2.19729 117.677 0 120.175 0 123.183V154.12C0 157.473 2.728 160.201 6.08146 160.201H41.2504C42.6897 160.201 43.8567 159.034 43.8567 157.595C43.8567 156.155 42.6897 154.988 41.2504 154.988H6.08146C5.60249 154.988 5.21268 154.599 5.21268 154.12V143.476H173.787V154.12C173.787 154.599 173.398 154.988 172.919 154.988H53.4909C52.0516 154.988 50.8846 156.155 50.8846 157.595C50.8846 159.034 52.0516 160.201 53.4909 160.201H172.919C176.272 160.201 179 157.473 179 154.12V123.183C179 120.363 177.068 117.992 174.46 117.307ZM146.203 71.2943C146.203 71.1909 146.287 71.1066 146.391 71.1066H167.221C167.324 71.1066 167.408 71.1909 167.408 71.2943V75.1005H146.203V71.2943ZM144.365 115.519C144.188 113.514 146.542 111.858 147.751 110.59C149.475 108.9 150.465 106.545 150.465 104.13V94.0071C150.465 91.5374 149.438 89.1457 147.646 87.4456C146.407 86.216 144.201 84.677 144.365 82.685V80.3132H169.247V82.685C169.414 84.6725 167.201 86.2209 165.966 87.4456C164.174 89.1457 163.147 91.5374 163.147 94.0071V104.13C163.147 106.545 164.136 108.9 165.861 110.59C167.075 111.864 169.42 113.509 169.247 115.519V117.102H144.365V115.519ZM130.341 122.314V138.264H113.83V122.314H130.341ZM135.553 122.314H152.064V138.264H135.553V122.314ZM108.617 122.314V138.264H92.106V122.314H108.617ZM6.08146 122.314H21.7233V138.264H5.21268V123.183C5.21268 122.704 5.60249 122.314 6.08146 122.314ZM26.936 122.314H43.447V138.264H26.936V122.314ZM48.6593 122.314H65.1703V138.264H48.6593V122.314ZM70.383 122.314H86.8937V138.264H70.383V122.314ZM15.2094 69.0698C15.2094 64.9265 18.5803 61.5556 22.7236 61.5556C26.8668 61.5556 30.2377 64.9265 30.2377 69.0698C30.2377 71.4586 29.1109 73.6825 27.2052 75.1005H18.243C16.3369 73.6829 15.2094 71.4583 15.2094 69.0698ZM11.4326 112.781L13.6687 110.59C15.3936 108.899 16.383 106.544 16.383 104.129V94.0067C16.383 91.5367 15.3555 89.1454 13.5638 87.4452L11.477 85.4647C10.0278 84.2827 10.2813 81.9686 10.2827 80.3129H35.1655C35.1662 81.9731 35.4207 84.2792 33.9708 85.465L31.884 87.4452C30.0923 89.1454 29.0648 91.5371 29.0648 94.0067V104.129C29.0648 106.544 30.0542 108.899 31.7795 110.59C32.993 111.864 35.3385 113.509 35.1655 115.518V117.102H10.2824V115.518C10.2824 114.495 10.7019 113.497 11.4326 112.781ZM157.277 138.264V122.315H172.919C173.398 122.315 173.788 122.704 173.788 123.183V138.264H157.277Z" fill={color} />
    </svg>
  );
};
