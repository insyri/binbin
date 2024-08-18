SET @firstnameparameter = '[insertnamehere]';
SET @lastnameparameter = '[insertnamehere]'

SELECT *, (CASE WHEN firstname LIKE CONCAT('%', @firstnameparameter, '%') THEN 1 ELSE 0 END + 
CASE WHEN lastname LIKE CONCAT('%', @lastnameparameter,  '%') THEN 1 ELSE 0 END) AS priority 
FROM VergilBus WHERE firstname LIKE CONCAT('%', @firstnameparameter, '%') 
OR lastname LIKE CONCAT('%', @lastnameparameter, '%') ORDER BY priority DESC;