/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Addons = "addons",
	CartItems = "cart_items",
	CartToOrders = "cart_to_orders",
	Carts = "carts",
	Categories = "categories",
	Customers = "customers",
	Images = "images",
	Notifications = "notifications",
	Orders = "orders",
	Paddocks = "paddocks",
	Payments = "payments",
	Products = "products",
	Ratings = "ratings",
	Roles = "roles",
	Tables = "tables",
	UserToRoles = "user_to_roles",
	Users = "users",
	Vendors = "vendors",
	Waiters = "waiters",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AddonsRecord = {
	name?: string
	product_id?: RecordIdString
	price?: number
}

export type CartItemsRecord = {
	cart_id?: RecordIdString
	product_id?: RecordIdString
	quantity?: number
	remarks?: string
}

export type CartToOrdersRecord = {
	order_id?: RecordIdString
	cart_id?: RecordIdString
}

export type CartsRecord = {
	customer_id?: RecordIdString
	table_id?: RecordIdString
}

export type CategoriesRecord = {
	name?: string
}

export type CustomersRecord = {
	name?: string
	phone?: string
}

export type ImagesRecord = {
	file: string
}

export type NotificationsRecord = {
	user_id?: RecordIdString
	read?: boolean
	title?: string
	description?: HTMLString
}

export enum OrdersOrderStatusOptions {
	"pending" = "pending",
	"completed" = "completed",
	"paid" = "paid",
}
export type OrdersRecord<Torders_detail = unknown> = {
	payment_id?: RecordIdString
	table_id?: RecordIdString
	product_id: RecordIdString[]
	order_status: OrdersOrderStatusOptions
	vendor_id: RecordIdString
	addons_id?: RecordIdString[]
	name: string
	phone_number: string
	total_price: number
	orders_detail?: null | Torders_detail
}

export type PaddocksRecord = {
	name?: string
	address?: string
	image_url?: string
	founder_user_id?: RecordIdString
	table_quantity?: number
}

export type PaymentsRecord = {
	payment_method?: string
}

export type ProductsRecord = {
	vendor_id?: RecordIdString
	product_name?: string
	product_price?: number
	status?: boolean
	category_id?: RecordIdString
	addons_id?: RecordIdString[]
	image_url?: RecordIdString
}

export type RatingsRecord = {
	customer_id?: RecordIdString
	vendor_id?: RecordIdString
	like_rate?: number
}

export type RolesRecord = {
	name?: string
	description?: HTMLString
}

export type TablesRecord = {
	paddock_id?: RecordIdString
	name?: string
	available?: boolean
}

export type UserToRolesRecord = {
	user_id?: RecordIdString
	role_id?: RecordIdString
}

export type UsersRecord = {
	name?: string
	avatar?: string
	phone?: string
	vendor?: RecordIdString
	notifications?: RecordIdString[]
	paddock?: RecordIdString
	waiter?: RecordIdString
	user_to_role?: RecordIdString
}

export type VendorsRecord = {
	user_id?: RecordIdString
	paddock_id?: RecordIdString
	available?: boolean
	vendor_image_url?: string
	background_image_url?: string
	products?: RecordIdString[]
}

export type WaitersRecord = {
	user_id?: RecordIdString
	paddock_id?: RecordIdString
}

// Response types include system fields and match responses from the PocketBase API
export type AddonsResponse<Texpand = unknown> = Required<AddonsRecord> & BaseSystemFields<Texpand>
export type CartItemsResponse<Texpand = unknown> = Required<CartItemsRecord> & BaseSystemFields<Texpand>
export type CartToOrdersResponse<Texpand = unknown> = Required<CartToOrdersRecord> & BaseSystemFields<Texpand>
export type CartsResponse<Texpand = unknown> = Required<CartsRecord> & BaseSystemFields<Texpand>
export type CategoriesResponse<Texpand = unknown> = Required<CategoriesRecord> & BaseSystemFields<Texpand>
export type CustomersResponse<Texpand = unknown> = Required<CustomersRecord> & BaseSystemFields<Texpand>
export type ImagesResponse<Texpand = unknown> = Required<ImagesRecord> & BaseSystemFields<Texpand>
export type NotificationsResponse<Texpand = unknown> = Required<NotificationsRecord> & BaseSystemFields<Texpand>
export type OrdersResponse<Torders_detail = unknown, Texpand = unknown> = Required<OrdersRecord<Torders_detail>> & BaseSystemFields<Texpand>
export type PaddocksResponse<Texpand = unknown> = Required<PaddocksRecord> & BaseSystemFields<Texpand>
export type PaymentsResponse<Texpand = unknown> = Required<PaymentsRecord> & BaseSystemFields<Texpand>
export type ProductsResponse<Texpand = unknown> = Required<ProductsRecord> & BaseSystemFields<Texpand>
export type RatingsResponse<Texpand = unknown> = Required<RatingsRecord> & BaseSystemFields<Texpand>
export type RolesResponse<Texpand = unknown> = Required<RolesRecord> & BaseSystemFields<Texpand>
export type TablesResponse<Texpand = unknown> = Required<TablesRecord> & BaseSystemFields<Texpand>
export type UserToRolesResponse<Texpand = unknown> = Required<UserToRolesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type VendorsResponse<Texpand = unknown> = Required<VendorsRecord> & BaseSystemFields<Texpand>
export type WaitersResponse<Texpand = unknown> = Required<WaitersRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	addons: AddonsRecord
	cart_items: CartItemsRecord
	cart_to_orders: CartToOrdersRecord
	carts: CartsRecord
	categories: CategoriesRecord
	customers: CustomersRecord
	images: ImagesRecord
	notifications: NotificationsRecord
	orders: OrdersRecord
	paddocks: PaddocksRecord
	payments: PaymentsRecord
	products: ProductsRecord
	ratings: RatingsRecord
	roles: RolesRecord
	tables: TablesRecord
	user_to_roles: UserToRolesRecord
	users: UsersRecord
	vendors: VendorsRecord
	waiters: WaitersRecord
}

export type CollectionResponses = {
	addons: AddonsResponse
	cart_items: CartItemsResponse
	cart_to_orders: CartToOrdersResponse
	carts: CartsResponse
	categories: CategoriesResponse
	customers: CustomersResponse
	images: ImagesResponse
	notifications: NotificationsResponse
	orders: OrdersResponse
	paddocks: PaddocksResponse
	payments: PaymentsResponse
	products: ProductsResponse
	ratings: RatingsResponse
	roles: RolesResponse
	tables: TablesResponse
	user_to_roles: UserToRolesResponse
	users: UsersResponse
	vendors: VendorsResponse
	waiters: WaitersResponse
}