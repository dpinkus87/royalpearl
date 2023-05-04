import React from "react";
import { useAuthController } from "firecms";

export function ExampleCMSView() {

    const authController = useAuthController();

    return (
        authController.user ?
            <div>Logged in as {authController.user.displayName}</div>
            :
            <div>You are not logged in</div>
    );
}