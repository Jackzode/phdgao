import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function SelectScrollable() {
    return (
        <Select>
            <SelectTrigger>
                <button className="px-4 py-2  rounded  transition-colors">
                    跳转到
                </button>
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-y-auto">
                <SelectGroup>

                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>

                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                    <SelectItem value="west">
                        Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>

                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                    <SelectItem value="ist_indonesia">
                        Indonesia Central Standard Time (WITA)
                    </SelectItem>

                    <SelectItem value="awst">
                        Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                        Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                        Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>

                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                    <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
