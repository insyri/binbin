SET @firstnameparameter = '[insertnamehere]';
SET @lastnameparameter = '[insertnamehere]'

SELECT *, (CASE WHEN firstname LIKE '%@firstnameparameter%' THEN 1 ELSE 0 END + CASE WHEN lastname LIKE '%lastnameparameter%' THEN 1 ELSE 0 END) AS priority
FROM VergilBus WHERE firstname LIKE '%@firstnameparameter%' OR lastname LIKE '%lastnameparameter%'
ORDER BY priority DESC;