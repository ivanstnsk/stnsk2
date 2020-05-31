import React from 'react';

import { SvgProjectIconInnerProps } from '../types';


export const MedicalIcon: React.FC<SvgProjectIconInnerProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 144 179" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M104.227 92.6595H108.532V96.9648C108.532 98.4133 109.706 99.587 111.154 99.587C112.602 99.587 113.776 98.4133 113.776 96.9648V92.6595H118.072C119.52 92.6595 120.694 91.4857 120.694 90.0372C120.694 88.5887 119.52 87.415 118.072 87.415H113.776V83.1194C113.776 81.6709 112.602 80.4972 111.154 80.4972C109.706 80.4972 108.532 81.6709 108.532 83.1194V87.415H104.227C102.778 87.415 101.604 88.5887 101.604 90.0372C101.604 91.4857 102.778 92.6595 104.227 92.6595Z" fill={color} />
      <path d="M63.5233 110.747C74.466 110.747 84.9385 107.598 93.9925 101.617C97.7186 107.122 104.021 110.747 111.154 110.747C122.568 110.747 131.853 101.456 131.853 90.0372C131.853 80.6164 125.525 72.6508 116.898 70.1544C118.225 65.3435 118.9 60.3829 118.9 55.3685C118.9 24.8381 94.0583 0 63.5233 0C47.6165 0 32.4642 6.85206 21.9515 18.7993C20.9949 19.8863 21.1005 21.5435 22.1879 22.5001C23.2752 23.4567 24.9321 23.3515 25.8887 22.2634C35.406 11.4476 49.1234 5.24446 63.5233 5.24446C91.1661 5.24446 113.656 27.7299 113.656 55.3682C113.656 60.1155 112.991 64.8093 111.678 69.3503C111.503 69.3457 111.33 69.337 111.154 69.337C99.7349 69.337 90.4448 78.6232 90.4448 90.0369C90.4448 92.4413 90.8613 94.7492 91.6179 96.898C83.3061 102.534 73.6364 105.502 63.5233 105.502C35.8801 105.502 13.3908 83.0124 13.3908 55.3682C13.3908 47.5515 15.1425 40.0645 18.5975 33.116C19.2422 31.8192 18.7136 30.2451 17.4168 29.6004C16.1204 28.9561 14.5463 29.484 13.9013 30.7811C10.0826 38.4618 8.14636 46.7337 8.14636 55.3678C8.14636 85.9042 32.9883 110.747 63.5233 110.747ZM111.154 74.5814C119.676 74.5814 126.609 81.5146 126.609 90.0369C126.609 98.5647 119.676 105.502 111.154 105.502C102.627 105.502 95.6893 98.5643 95.6893 90.0369C95.6893 81.515 102.627 74.5814 111.154 74.5814Z" fill={color} />
      <path d="M34.7103 62.5523C32.0608 66.9189 31.2717 72.0549 32.4884 77.0131C33.7051 81.9712 36.7826 86.1608 41.1544 88.8106C44.2406 90.6798 47.6516 91.5696 51.0223 91.5696C52.0583 91.5696 53.089 91.4762 54.1068 91.3108C54.2547 91.4633 54.4036 91.6126 54.5547 91.7636L54.6421 91.8514C54.67 91.879 54.6984 91.9063 54.7274 91.9328C57.3521 94.3317 60.6662 95.5162 63.972 95.5159C67.6864 95.5159 71.3897 94.0205 74.0899 91.0738L95.1293 68.0814C100.232 62.5114 99.8524 53.829 94.2811 48.7248C91.5879 46.2634 88.0877 45.0054 84.4218 45.1579C81.1126 45.304 78.0432 46.6018 75.6671 48.8314L74.6165 25.1041C74.4563 21.4613 72.8774 18.0909 70.1706 15.6144C67.4648 13.1394 63.9709 11.8653 60.3257 12.0241C52.7764 12.3562 46.9047 18.7674 47.2365 26.3163L47.9211 41.7724C47.9211 41.8105 47.9187 41.8483 47.9204 41.8867C47.9222 41.9262 47.9278 41.9643 47.9313 42.0035L48.4421 53.5347C42.9378 54.3014 37.8081 57.4414 34.7103 62.5523ZM70.2223 87.532C67.5784 90.4175 63.3797 91.0395 60.062 89.3082C62.9951 87.7481 65.5614 85.4115 67.4071 82.3725C67.4085 82.3704 67.4099 82.3687 67.4113 82.3666C67.4127 82.3645 67.4137 82.3621 67.4148 82.36C69.7954 78.4256 70.5852 73.9643 69.9692 69.7309L78.9694 77.9728L70.2223 87.532ZM75.2426 56.9971C75.2535 56.9855 75.2643 56.9736 75.2748 56.9621L78.7889 53.1238C81.9342 49.6828 87.2965 49.4454 90.7411 52.5942C94.1779 55.7429 94.4118 61.1014 91.2617 64.54L82.5101 74.1038L70.0373 62.6824L75.2426 56.9971ZM70.1828 43.5247L70.6572 54.2388L65.4708 59.9039C64.2059 58.4491 62.701 57.161 60.9672 56.109C58.6716 54.7182 56.1962 53.8724 53.6918 53.528L53.282 44.2736L70.1828 43.5247ZM60.5564 17.264C62.7993 17.1605 64.9579 17.9535 66.6309 19.4841C68.3035 21.0145 69.279 23.092 69.3776 25.3352L69.951 38.2855L53.0498 39.0348L52.4761 26.0855C52.2712 21.426 55.8962 17.4689 60.5564 17.264ZM51.0856 58.5907C53.532 58.5907 56.0081 59.2368 58.2485 60.5937C64.0213 64.097 66.3299 71.1686 64.0688 77.276L40.7708 63.1593C43.4437 60.2004 47.2271 58.5907 51.0856 58.5907ZM61.3497 81.76C58.6744 84.7182 54.8907 86.3276 51.0318 86.3269C48.5865 86.3269 46.1107 85.6811 43.872 84.3252C40.6984 82.4019 38.4647 79.3612 37.5818 75.7631C36.9113 73.0294 37.0833 70.2218 38.0472 67.6405L61.3497 81.76Z" fill={color} />
      <path d="M141.918 142.129C140.905 140.488 139.492 139.278 137.821 138.53C137.913 138.366 138.007 138.204 138.089 138.032C139.088 135.939 139.213 133.59 138.442 131.422C137.666 129.232 136.078 127.484 133.971 126.499C131.867 125.515 129.482 125.409 127.255 126.198C127.241 126.203 127.228 126.208 127.214 126.213L119.091 129.243C119.131 128.184 118.986 127.109 118.621 126.07C117.852 123.903 116.283 122.164 114.202 121.174C112.082 120.165 109.677 120.049 107.431 120.848C107.418 120.852 107.406 120.856 107.394 120.861L92.1196 126.557C92.1364 125.583 91.9801 124.606 91.6452 123.665C90.9176 121.602 89.4257 119.944 87.4444 118.996C85.4203 118.029 83.1226 117.915 80.9734 118.676C80.9612 118.68 80.9489 118.685 80.9367 118.689L52.8159 129.119C51.7471 128.724 50.7559 128.312 49.7944 127.911C43.4678 125.271 38.7604 123.806 26.7695 127.796C26.1293 124.681 23.3665 122.331 20.065 122.331H6.83423C3.06591 122.331 0 125.402 0 129.176V141.951C0 143.399 1.17406 144.573 2.62223 144.573C4.0704 144.573 5.24446 143.399 5.24446 141.951V129.176C5.24446 128.309 5.97239 127.576 6.83423 127.576H20.065C20.9471 127.576 21.6649 128.293 21.6649 129.176V167.848C21.6649 168.715 20.9324 169.448 20.065 169.448H6.83423C5.97239 169.448 5.24446 168.715 5.24446 167.848V154.062C5.24446 152.613 4.0704 151.439 2.62223 151.439C1.17406 151.439 0 152.613 0 154.062V167.848C0 171.622 3.06591 174.692 6.83423 174.692H20.065C23.2172 174.692 25.8713 172.547 26.6625 169.642C33.8684 169.865 37.9265 170.637 46.5194 173.205L61.6794 177.733C64.4984 178.579 68.2713 179 72.0659 179C76.03 179 80.0186 178.541 82.9691 177.628C90.7784 175.217 103.326 170.431 108.001 168.522L138.237 156.214C140.494 155.296 142.18 153.437 142.985 150.978C143.923 148.109 143.515 144.719 141.918 142.129ZM114.535 136.54C114.554 136.533 114.574 136.526 114.592 136.518L129.025 131.135C129.941 130.816 130.908 130.856 131.751 131.25C132.575 131.636 133.196 132.319 133.5 133.176C133.802 134.025 133.751 134.947 133.356 135.773C132.961 136.601 132.273 137.224 131.418 137.527C131.405 137.532 131.393 137.536 131.38 137.541L95.1257 151.024C95.1149 150.277 95.031 149.521 94.8639 148.769C94.5142 147.194 93.8475 145.78 92.9294 144.598L114.535 136.54ZM109.205 125.783C110.126 125.46 111.099 125.504 111.949 125.909C112.764 126.297 113.378 126.976 113.676 127.816C114.177 129.241 113.66 130.846 112.446 131.721L87.4132 141.058L77.4495 137.624L109.205 125.783ZM82.7394 123.614C83.5621 123.328 84.4291 123.368 85.1829 123.728C85.8993 124.071 86.4378 124.668 86.7017 125.416C86.9699 126.169 86.9255 126.986 86.5773 127.717C86.2322 128.44 85.6329 128.984 84.8893 129.252L69.6485 134.935L60.6137 131.821L82.7394 123.614ZM138 149.347C137.776 150.032 137.293 150.937 136.26 151.356L106.021 163.666C101.416 165.546 89.0771 170.253 81.4202 172.618C76.5569 174.123 68.0371 174.167 63.1838 172.709L48.0207 168.18C39.0247 165.492 34.5397 164.646 26.9093 164.403V133.292C38.8905 129.05 42.4766 130.54 47.7746 132.751C49.0675 133.29 86.5871 146.321 86.5871 146.321C87.737 146.713 88.6397 147.403 89.2194 148.485C89.7526 149.48 89.9715 150.643 89.8575 151.765C89.7096 153.218 88.9722 154.587 87.7408 155.399C86.7262 156.067 85.4976 156.327 84.298 156.366C82.4936 156.424 80.6877 156.021 78.9837 155.457L57.6558 148.421C56.2807 147.967 54.7976 148.714 54.3438 150.089C53.89 151.464 54.6371 152.947 56.0122 153.401L77.3383 160.437C79.8895 161.281 82.0775 161.609 83.939 161.609C87.995 161.609 90.4987 160.049 91.82 158.855C92.3256 158.398 92.7773 157.891 93.1724 157.346L130.628 143.416C133.041 142.582 136.014 142.55 137.455 144.883C138.251 146.174 138.465 147.926 138 149.347Z" fill={color} />
    </svg>
  );
};
