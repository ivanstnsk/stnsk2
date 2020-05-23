import React from 'react';

import { SvgIconInnerProps } from '../types';


export const ProjectsIcon: React.FC<SvgIconInnerProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M43.1015 11.5097C43.3655 11.1624 43.2983 10.6667 42.951 10.4024C42.6036 10.1383 42.1079 10.2056 41.8437 10.5529C41.8273 10.5747 41.7901 10.6111 41.7271 10.6111C41.6639 10.6111 41.6268 10.5745 41.6104 10.5527C41.3477 10.2043 40.8521 10.1349 40.5039 10.3976C40.1555 10.6603 40.086 11.1558 40.3488 11.5041C40.6733 11.9345 41.1886 12.1913 41.7273 12.1913C42.271 12.1913 42.7719 11.9429 43.1015 11.5097V11.5097Z" fill={color} />
        <path d="M52.3355 48.4166H47.2622C47.6023 47.8855 47.8006 47.2551 47.8006 46.5788V42.9816C47.8006 42.5452 47.4469 42.1915 47.0105 42.1915C46.5741 42.1915 46.2204 42.5452 46.2204 42.9816V46.5788C46.2204 47.5922 45.3961 48.4166 44.3827 48.4166C43.3693 48.4166 42.5449 47.5922 42.5449 46.5788V34.1825C42.5449 33.7462 42.1912 33.3925 41.7549 33.3924C41.7549 33.3924 41.7549 33.3924 41.7548 33.3924C41.3186 33.3924 40.9648 33.746 40.9647 34.1823L40.9611 46.5787C40.9611 47.5921 40.1368 48.4165 39.1234 48.4165C38.1101 48.4165 37.2857 47.5921 37.2857 46.5787V23.8098C37.2857 23.3734 36.932 23.0197 36.4956 23.0197C36.0592 23.0197 35.7055 23.3734 35.7055 23.8098V32.6047C35.7 33.336 35.0834 33.9294 34.3256 33.9294C34.2138 33.9294 34.1056 33.9144 34.0017 33.8887V20.8242C34.2175 20.4196 34.4658 20.0294 34.7471 19.657C35.8671 18.1748 37.458 17.0661 39.2271 16.5352C39.9833 16.3084 40.5114 15.5955 40.5114 14.8015V14.7377C40.8676 14.7905 41.2317 14.8186 41.6023 14.8186C42.0784 14.8186 42.5435 14.7717 42.9949 14.6855V14.8015C42.9949 15.5955 43.5231 16.3085 44.2793 16.5352C46.0484 17.0661 47.6394 18.1748 48.7592 19.657C49.9162 21.1883 50.5278 23.0152 50.5278 24.9401V32.5825C50.5278 33.3252 49.9235 33.9294 49.1809 33.9294C48.4461 33.9294 47.8628 33.4398 47.8008 32.7955V23.9443C47.8008 23.5079 47.4471 23.1542 47.0107 23.1542C46.5743 23.1542 46.2206 23.5079 46.2206 23.9443V39.2944C46.2206 39.7308 46.5743 40.0845 47.0107 40.0845C47.4471 40.0845 47.8008 39.7308 47.8008 39.2944V35.1949C48.211 35.3961 48.6793 35.5096 49.1809 35.5096C50.7947 35.5096 52.1079 34.1964 52.1079 32.5825V24.9401C52.1079 22.6685 51.386 20.5122 50.0202 18.7043C48.6994 16.9561 46.8218 15.6483 44.7335 15.0216C44.6402 14.9936 44.5752 14.9031 44.5752 14.8014V14.1939C47.1844 13.0461 49.0117 10.4377 49.0117 7.40914C49.0113 3.32378 45.6876 0 41.6021 0C37.5166 0 34.1929 3.32378 34.1929 7.40924C34.1929 10.5532 36.162 13.2442 38.931 14.3184V14.8014C38.931 14.9031 38.866 14.9937 38.7728 15.0216C36.9429 15.5707 35.275 16.643 34.0015 18.0761V15.9287C34.0015 15.0593 33.2941 14.3519 32.4246 14.3519H25.9349C25.4985 14.3519 25.1448 14.7056 25.1448 15.142C25.1448 15.5784 25.4985 15.9321 25.9349 15.9321L32.4213 15.9287V48.4166H25.7798V23.7356C25.7798 22.8661 25.0725 22.1587 24.2029 22.1587H19.8868L19.8862 15.9321H22.2125C22.6489 15.9321 23.0026 15.5784 23.0026 15.142C23.0026 14.7056 22.6489 14.3519 22.2125 14.3519H19.8862C19.0167 14.3519 18.3094 15.0593 18.3094 15.9287V22.1587H11.6646C10.795 22.1587 10.0877 22.8661 10.0877 23.7356V30.6556H3.44589C2.57637 30.6556 1.86907 31.363 1.86907 32.2324V48.4166H1.66439C0.803321 48.4166 0.102783 49.1171 0.102783 49.9782V52.4384C0.102783 53.2995 0.803321 54.0001 1.66439 54.0001H52.3356C53.1967 54.0001 53.8973 53.2995 53.8973 52.4384V49.9782C53.8972 49.1171 53.1966 48.4166 52.3355 48.4166V48.4166ZM35.7731 7.40924C35.7731 4.19509 38.388 1.5802 41.6021 1.5802C44.8163 1.5802 47.4311 4.1952 47.4311 7.40924C47.4311 10.6235 44.8161 13.2384 41.6021 13.2384C38.388 13.2384 35.7731 10.6235 35.7731 7.40924ZM34.0015 35.4905C34.1079 35.5023 34.2159 35.5096 34.3254 35.5096C34.8235 35.5096 35.2929 35.3874 35.7053 35.1725V46.5787C35.7053 47.255 35.9035 47.8854 36.2437 48.4165H34.0014V35.4905H34.0015ZM24.1996 23.7356V48.4166H17.561V32.2324C17.561 31.363 16.8537 30.6556 15.9842 30.6556H11.6655L11.6646 23.7389L24.1996 23.7356ZM15.9808 32.2324V48.4166H3.44906L3.44589 32.2358L15.9808 32.2324ZM52.317 52.4198H1.68287V49.9968H52.317V52.4198Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="54" height="54" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};