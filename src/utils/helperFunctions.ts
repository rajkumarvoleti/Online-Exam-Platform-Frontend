import { drawerItems } from "@/components/drawer/DrawerItems";
import { IDrawerListItem } from "@/interfaces/componentInterfaces";
import { ICountry, ITimeZone } from "@/interfaces/otherInterfaces";
import ct,{CountryCode, Country} from 'countries-and-timezones';

const flattenItems = (items:IDrawerListItem[]): IDrawerListItem[] => {
  items.forEach(item => {
    if(item.Items){
      const flattenedItems = flattenItems(item.Items);
      items = [...items,...flattenedItems];
    }
  });
  return items;
}

export function findDrawerItem(path: string) {
  path = path.replace("/user","");
  const activeItem = flattenItems(drawerItems).find(item => {
    if(item.Items)
      return false;
    return item.href === path;
  })
  return activeItem || drawerItems[0];
}

export function getCountries() {
  const data = ct.getAllCountries();
  const countries:ICountry[] = Object.entries(data).map(country => {
    return {
      id:country[1].id,
      label: country[1].name,
    }
  });
  getTimeZones('IN');
  return countries;
}

export function getAllTimeZones() {
  const data = ct.getAllTimezones();
  const timezones:ITimeZone[] = Object.entries(data).map(timezone => {
    return {
      id: timezone[0],
      label:timezone[1].name
    };
  })
  return timezones;
}

export function getTimeZones(id:string) {
  const data = ct.getTimezonesForCountry(id);
  if(!data){
    return getAllTimeZones();
  }
  const timezones:ITimeZone[] = data.map(timezone => {
    return {
      id: id,
      label:timezone.name
    };
  })
  return timezones;
}