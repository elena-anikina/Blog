import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const getPopupMessage = (value) => {
  switch (value) {
    case 'editProfileSuccess':
      return {
        content: 'Your profile has been updated successfully!',
      };

    case 'editProfileError':
      return {
        title: 'This is an error message',
        content: 'Error occurred while updating the profile. Check your input data and try again.',
      };

    case 'signInSuccess':
      return {
        title: 'You are lucky!',
        content: 'You logged in successfully!',
      };

    case 'signInError':
      return {
        title: 'This is an error message',
        content: 'Check your input data and try again.',
      };

    case 'newArticleSuccess':
      return {
        title: 'You are lucky!',
        content: 'New article added successfully!',
      };

    case 'newArticleError':
      return {
        title: 'This is an error message',
        content: 'Check your input data and try again.',
      };

    case 'articleEditSuccess':
      return {
        title: 'You are lucky!',
        content: 'Your article has been edited successfully!',
      };

    case 'articleEditError':
      return {
        title: 'This is an error message',
        content: 'Check your input data and try again.',
      };

    case 'articleDeleteSuccess':
      return {
        title: 'Success!',
        content: 'Your article is deleted!',
      };

    case 'articleDeleteError':
      return {
        title: 'Error!',
        content: 'Something went wrong. Try to reload page.',
      };
  }
};

export function success(value, navigateToHomePage) {
  Modal.success({ ...getPopupMessage(value) });
  navigateToHomePage();
}

export function error(value) {
  Modal.error({ ...getPopupMessage(value) });
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
