export interface IProduct {
  getID(): string;
  getTitle(): string;
  getAvailability(): boolean;
  getDescription(): string;
<<<<<<< HEAD
  getPrice(): string;
=======
  getPrice(): number;
>>>>>>> lashkoEv
  getQuantity(): number;
  getManufacturer(): string;
  getImageURL(): string;

  setTitle(title: string): void;
  setAvailability(isAvailable: boolean): void;
  setDescription(description: string): void;
<<<<<<< HEAD
  setPrice(price: string): void;
=======
  setPrice(price: number): void;
>>>>>>> lashkoEv
  setQuantity(quantity: number): void;
  setManufacturer(manufacturer: string): void;
  setImageURL(imageURL: string): void;
}
