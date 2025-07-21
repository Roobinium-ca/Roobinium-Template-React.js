import './index.scss'
import { useTranslation, I18nextProvider, Trans } from 'react-i18next';
const Button = (props) => {
    let { t, i18n } = useTranslation();

    return (
        <>
            <button onClick={props.event} className={[ 'button', props.class].join(' ')}>
                <Trans i18nKey={props.locale}>
                    {props.name}
                </Trans>
            </button>
        </>
    )
};

export default Button;
