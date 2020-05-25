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
| 'not-found';

export interface SvgIconInnerProps {
  color: string;
  width: number;
  height: number;
}
