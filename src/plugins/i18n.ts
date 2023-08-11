// @ts-ignore
import { createI18n } from 'vue-i18n';
import enUS from '../locales/en-US.json';
import es from '../locales/es.json';


// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof enUS;

export const i18n = createI18n<[MessageSchema], 'en-US' | 'es'>({
	legacy: false,
  locale: 'en-US',
  messages: {
    'en-US': enUS,
		'es': es
  }
});