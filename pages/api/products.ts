/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

// API route for fetching products
import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop.' },
  { id: 2, name: 'Smartphone', price: 499, description: 'Latest model smartphone.' },
  { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling headphones.' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
