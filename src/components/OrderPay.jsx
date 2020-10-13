import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const products = [
    { name: '총 주문 금액', desc: '', price: '10,500원' },
    { name: '할인 금액', desc: '', price: '- 500원' },
    { name: '배달비', desc: '', price: '4,000원' },
  ];

  const payments = [
    { name: '네네치킨', detail: '7000원' },
    { name: '콜라', detail: '1,000원' },
    { name: '웨지감자', detail: '2,500원' },
  ];

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
  }));

  
 export default function OrderPay() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          주문목록
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
            </Typography>
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}

            </Grid>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
            </Typography>
            <List disablePadding>
          {products.map((product) => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              14,800원
            </Typography>
          </ListItem>
        </List>
        <footer>
          {/* <Link to = "/events"> */}
            <button>현금 결제</button>
          {/* </Link>
          <Link to="/about"> */}
              <button>카드 결제</button>
          {/* </Link> */}
        </footer>


          </Grid>
          <Typography variant="h6" gutterBottom>
          카드 결제 정보
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="이름" fullWidth autoComplete="cc-name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="카드번호"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="카드 만료 날짜" fullWidth autoComplete="cc-exp" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV 번호"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>          
          <footer>
          {/* <Link to = "/events"> */}
            <button variant ="secondary">뒤로</button>
          {/* </Link>
          <Link to="/about"> */}
              <button color ="primary">다음</button>
          {/* </Link> */}
        </footer>

        
        </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  
