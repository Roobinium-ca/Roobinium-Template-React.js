import './index.scss'

import { useTranslation, I18nextProvider, Trans } from 'react-i18next';

const Title = (props) => {
    let { t, i18n } = useTranslation();

    return (
        <>
            <div className={["title ", props.class].join('')}>
                <Trans i18nKey={props.locale}>
                    {props.name}
                </Trans>
            </div>
        </>
    )
}

export default Title;
