import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons';

export function showSuccess(statusText: string) {
  return showNotification({
    id: 'successNoti',
    color: 'teal',
    title: 'Success',
    message: statusText,
    icon: <IconCheck size={16} />,
    autoClose: 2000,
  });
}
export function showError(statusText: string) {
  return showNotification({
    id: 'errorNoti',
    color: 'red',
    title: 'Error',
    message: statusText,
    icon: <IconX size={16} />,
    autoClose: 2000,
  });
}
