export type TSvgIconType =
| 'cv'
| 'about'
| 'projects'
| 'contacts'
| 'articles'
| 'logo'
| 'web'
| 'mobile'
| 'design'
| 'backend'
| 'mail'
| 'skype'
| 'github'
| 'instagram'
| 'linkedin'
| 'not-found'
| 'close'
| 'maintenance'
| 'schedule'
| 'work-result'
| 'achievements'
| 'team';

export interface SvgIconInnerProps {
  color: string;
  width: number;
  height: number;
}
