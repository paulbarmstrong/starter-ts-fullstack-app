import * as z from "zod"
import { dynamicWebappConfigZod, gridItemZod } from "./Zod.js"

export type Json = undefined | null | string | number | boolean | Array<Json> | JsonObject

export type JsonObject = {
	[name: string]: Json
}

export type GridItem = z.infer<typeof gridItemZod>

export type DynamicWebappConfig = z.infer<typeof dynamicWebappConfigZod>