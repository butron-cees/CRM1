def calcular_tasa_retencion(clientes_inicio, clientes_durante, clientes_final):
    try:
        tasa_retencion = ((clientes_final - clientes_durante) / clientes_inicio) * 100
        return tasa_retencion
    except ZeroDivisionError:
        print("Error: El número de clientes al inicio del período no puede ser cero.")
        return None

clientes_final = int(input("Ingrese el número de clientes al final del período: "))
clientes_durante = int(input("Ingrese el número de clientes durante el período: "))
clientes_inicio = int(input("Ingrese el número de clientes al inicio del período: "))

tasa_retencion_calculada = calcular_tasa_retencion(clientes_inicio, clientes_durante, clientes_final)

if tasa_retencion_calculada is not None:
    print(f"Tasa de retención calculada: {tasa_retencion_calculada:.2f}%")
