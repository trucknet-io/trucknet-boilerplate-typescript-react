import React from "react";
import PropTypes from "prop-types";
import { LionessProvider } from "lioness";

import { EVENT_GET_LOCALE_ID, EVENT_SET_LOCALE_ID } from "../../../shared";

class WithIntl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: props.loczles[0] || null,
        };

        this.setLocale = this.setLocale.bind(this);

        const { channel } = this.props;

        // Listen for change of locale
        channel.on(EVENT_SET_LOCALE_ID, this.setLocale);

        // Request the current locale
        channel.emit(EVENT_GET_LOCALE_ID);
    }

    setLocale(locale) {
        this.setState({
            locale: locale,
        });
    }

    componentWillUnmount() {
        this.props.channel.removeListener(EVENT_SET_LOCALE_ID, this.setLocale);
    }

    render() {
        // If the component is not initialized we don't want to render anything
        if (!this.state.locale) {
            return null;
        }

        const { children, messages } = this.props;

        const { locale } = this.state;

        return (
            <LionessProvider messages={messages} locale={locale}>
                {children}
            </LionessProvider>
        );
    }
}

WithIntl.propTypes = {
    locales: PropTypes.arrayOf(PropTypes.string).isRequired,
    messages: PropTypes.object,
    channel: PropTypes.shape({
        emit: PropTypes.func.isRequired,
        on: PropTypes.func.isRequired,
        removeListener: PropTypes.func.isRequired,
    }).isRequired,
};

export default WithIntl;
