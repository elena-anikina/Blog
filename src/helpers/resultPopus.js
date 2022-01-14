import {Modal} from "antd";

const getPopupMessage = (value) => {
    switch (value) {
        case 'editProfileSuccess':
            return {
                content: 'Your profile has been updated successfully!',
            }

        case 'editProfileError':
            return {
                title: 'This is an error message',
                content: 'Error occurred while updating the profile. Check your input data and try again.',
            }

        case 'signInSuccess':
            return {
                title: 'You are lucky!',
                content: 'You logged in successfully!',
            }

        case 'signInError':
            return {
                title: 'This is an error message',
                content: 'Check your input data and try again.'
            }
    }
}

export function success(value) {
    Modal.success({...getPopupMessage(value)});
}

export function error(value) {
    Modal.error({...getPopupMessage(value)});
}

export function info() {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>You have to login to like articles.</p>
            </div>
        ),
        onOk() {},
    });
}
