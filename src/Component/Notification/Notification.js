import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

export function Notification(props) {
  const { enqueueSnackbar } = useSnackbar();
  let variant = props.type;
  return enqueueSnackbar(props.msg, { variant });
}

const IntegrationNotistack = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Notification />
    </SnackbarProvider>
  );
};

export default React.memo(IntegrationNotistack);
