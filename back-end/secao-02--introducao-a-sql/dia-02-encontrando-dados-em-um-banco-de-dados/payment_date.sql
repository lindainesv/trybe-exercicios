SELECT count(*) pagamentos FROM sakila.payment
where date(payment_date)
between '2005-05-01' AND '2005-08-01';

-- porque que com o date o valor é diferente do que sem ele?
