import React from 'react'

const Subadmin = () => {
  return (
    <>
        <form action="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card px-14 py-7 shadow-lg">
                            <label htmlFor="" class="mb-2 text-muted">Title</label>
                            <input type="text" class="border bg-light rounded-lg"/>
                            <label htmlFor="" class="my-3 text-muted">Sub-Title</label>
                            <input type="text" class="border bg-light rounded-lg"/>
                            <label htmlFor="" class="mt-4 mb-1 text-muted">Description</label>
                            <input type="text" class="border bg-light rounded-lg"/>
                            <label htmlFor="" class="my-3 text-muted">Media</label>
                            <input type="text" class="border bg-light rounded-lg"/>
                            <label htmlFor="" class="mt-3 text-muted">Stone Type</label>
                            <input type="text" value="Lab Diamond" class="border bg-light rounded-lg"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card px-3 py-6 shadow-lg">
                            <label htmlFor="" class="text-muted mb-2">Status</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">Active</option>
                                <option value="">Draft</option>
                            </select>
                            <label htmlFor="" class="text-muted my-2">Ring Size</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                                <option value="">13</option>
                                <option value="">14</option>
                                <option value="">15</option>
                                <option value="">16</option>
                                <option value="">17</option>
                                <option value="">18</option>
                                <option value="">19</option>
                                <option value="">20</option>
                                <option value="">21</option>
                                <option value="">22</option>
                                <option value="">23</option>
                                <option value="">24</option>
                            </select>
                            <label htmlFor="" class="text-muted my-2">Necklace Size</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">14 Inch</option>
                                <option value="">16 Inch</option>
                                <option value="">18 Inch</option>
                                <option value="">20 Inch</option>
                            </select>
                            <label htmlFor="" class="text-muted my-2">Bracelete Size</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">5 Inch</option>
                                <option value="">6 Inch</option>
                                <option value="">7 Inch</option>
                                <option value="">8 Inch</option>
                            </select>
                            <label htmlFor="" class="text-muted my-2">Primary Stone Shape</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">Round</option>
                                <option value="">Square</option>
                            </select>
                            <label htmlFor="" class="text-muted my-2">Metal</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">18KT</option>
                                <option value="">14KT</option>
                                <option value="">10KT</option>
                                <option value="">925 Silver</option>
                            </select>
                            <label htmlFor="" class="text-muted my-2">Weight</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">Active</option>
                                <option value="">Draft</option>
                            </select>
                            <label htmlFor="" class="text-muted my-2">Variant</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">Active</option>
                                <option value="">Draft</option>
                            </select>
                            <label htmlFor="" class="text-muted my-2">Collection</label>
                            <select name="" id="" class="border bg-light rounded-lg text-sm">
                                <option value="">Active</option>
                                <option value="">Draft</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default Subadmin
