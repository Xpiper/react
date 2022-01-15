import React from "react";

export const userContext = React.createContext('defaultValue');

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export {UserProvider, UserConsumer};
