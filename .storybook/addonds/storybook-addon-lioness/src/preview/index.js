import React from "react";
import addons from "@storybook/addons";
import WithIntl from "./containers/WithIntl";
import { EVENT_SET_CONFIG_ID } from "../shared";

export let _config = null;

export const setIntlConfig = (config) => {
    _config = config;

    const channel = addons.getChannel();
    channel.emit(EVENT_SET_CONFIG_ID, {
        locales: config.locales,
        messages: config.defaultLocale,
    });
};

export const withIntl = (story) => {
    const channel = addons.getChannel();

    return (
        <WithIntl locales={locales} messages={messages} channel={channel}>
            {story()}
        </WithIntl>
    );
};
