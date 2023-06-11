SELECT count(*) FROM sakila.payment
WHERE date(payment_date) between '2005-07-01' and '2005-08-22';

-- porque o resultado é diferente quando esta com date() e sem o date()?
