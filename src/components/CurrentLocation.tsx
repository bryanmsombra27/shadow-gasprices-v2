import { useEffect, type FC } from "react";
import { Button } from "@/components/ui/button";
import { GrMapLocation } from "react-icons/gr";
import { uselocationStore } from "@/store/location";
import { toast } from "sonner";

interface CurrentLocationProps {}
const CurrentLocation: FC<CurrentLocationProps> = ({}) => {
  const {
    isLoading,
    permissionGranted,
    setLocation,
    setPermissionGranted,
    setIsLoading,
  } = uselocationStore();

  useEffect(() => {
    const getPermission = async () => {
      const permission = await navigator.permissions.query({
        name: "geolocation",
      });
      switch (permission.state) {
        case "granted":
          setPermissionGranted("GRANTED");
          break;

        case "denied":
          setPermissionGranted("DENIED");
          break;

        default:
          setPermissionGranted("PROMPT");
          break;
      }
    };

    getPermission();
  }, []);

  const getCurrentLocation = () => {
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
        setPermissionGranted("GRANTED");
        setIsLoading(false);
      },
      (error) => {
        console.log(error, "error geo");

        setPermissionGranted("DENIED");
        setIsLoading(false);
        toast.info(
          "No brindo el permiso de usar su posicion actual, por lo tanto obtendra gasolineras de distintos estados!"
        );
        console.error(error.message);
      }
    );
  };
  const refreshWindow = () => {
    setPermissionGranted("PROMPT");
  };

  if (permissionGranted == "DENIED")
    return (
      <>
        <p>
          Si deseas obtener los registros segun tu ubicacion, Activa el permiso
          de <b>ubicación (location)</b> en la configuración del navegador
          cuando hayas cambiado el permiso
          <Button
            onClick={refreshWindow}
            className="cursor-pointer mx-3"
          >
            pulsa aqui
          </Button>{" "}
        </p>
      </>
    );

  if (permissionGranted == "PROMPT")
    return (
      <Button
        onClick={getCurrentLocation}
        variant="default"
        className={`cursor-pointer ${
          isLoading ? "pointer-events-none opacity-15" : ""
        }`}
        disabled={isLoading}
      >
        <GrMapLocation />
        Gasolineras cerca de mi
      </Button>
    );

  return null;
};

export default CurrentLocation;
