SELECT
    ROUND(
        100.0 * SUM(
            CASE
                WHEN Delivery.order_date = Delivery.customer_pref_delivery_date
                THEN 1
                ELSE 0
            END
        ) / COUNT(*),
        2
    ) AS immediate_percentage

FROM Delivery

JOIN (
    SELECT
        customer_id,
        MIN(order_date) AS First_ORDER
    FROM Delivery
    GROUP BY customer_id
) AS FirstOrders

ON Delivery.customer_id = FirstOrders.customer_id
AND Delivery.order_date = FirstOrders.First_ORDER;
 
 

