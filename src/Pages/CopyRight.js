import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function CopyRight() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Chetan GD
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default CopyRight;
