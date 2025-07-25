import { useNotifications, type FloatingNotification } from '@/components/ui/floating-notification';

export const useFloatingNotifications = () => {
  const { addNotification, removeNotification, clearAll, notifications } = useNotifications();

  // Helper functions for different notification types
  const showSuccess = (title: string, description: string, duration: number = 0) => {
    addNotification({
      title,
      description,
      type: 'success',
      duration,
    });
  };

  const showError = (title: string, description: string, duration: number = 0) => {
    addNotification({
      title,
      description,
      type: 'error',
      duration,
    });
  };

  const showWarning = (title: string, description: string, duration: number = 0) => {
    addNotification({
      title,
      description,
      type: 'warning',
      duration,
    });
  };

  const showInfo = (title: string, description: string, duration: number = 0) => {
    addNotification({
      title,
      description,
      type: 'info',
      duration,
    });
  };

  const show = (notification: Omit<FloatingNotification, 'id'>) => {
    addNotification(notification);
  };

  return {
    // Direct notification methods
    showSuccess,
    showError,
    showWarning,
    showInfo,
    show,
    
    // Management methods
    remove: removeNotification,
    clearAll,
    
    // State
    notifications,
    count: notifications.length,
  };
};
